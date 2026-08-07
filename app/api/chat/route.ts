import { NextRequest, NextResponse } from "next/server";
import { ChatSession, ChatMessage } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { getTopicBySlug } from "@/lib/content";

const SYSTEM_PROMPT = `你是一位耐心的高等数学助教，专门面向大一上学期学生。
要求：
1. 只回答高等数学相关问题；如果用户问其他内容，请礼貌地引导回高数学习。
2. 解释要口语化、循序渐进，适合初学者理解。
3. 尽量使用中文回答。
4. 数学公式请使用 LaTeX 格式，行内用 $...$，独立公式用 $$...$$。
5. 每个回答控制在 300 字以内，必要时分点说明。`;

export async function POST(req: NextRequest) {
  const session = await getSession();
  const userId = session.user?.id || null;

  try {
    const { message, sessionId, contextSlug, generalMode } = (await req.json()) as {
      message: string;
      sessionId?: string;
      contextSlug?: string;
      generalMode?: boolean;
    };

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "消息不能为空" }, { status: 400 });
    }

    let chatSession: (ChatSession & { messages: ChatMessage[] }) | null = null;
    let history: { role: "user" | "assistant"; content: string }[] = [];

    if (userId) {
      if (sessionId) {
        chatSession = await prisma.chatSession.findFirst({
          where: { id: sessionId, userId },
          include: { messages: { orderBy: { createdAt: "asc" } } },
        });
      }

      if (!chatSession) {
        const contextTitle = contextSlug
          ? getTopicBySlug(contextSlug)?.title
          : null;
        chatSession = await prisma.chatSession.create({
          data: {
            userId,
            contextSlug: contextSlug || null,
            title: contextTitle || message.slice(0, 20),
            messages: { create: { role: "user", content: message } },
          },
          include: { messages: { orderBy: { createdAt: "asc" } } },
        });
      } else {
        await prisma.chatMessage.create({
          data: { sessionId: chatSession.id, role: "user", content: message },
        });
        history = chatSession.messages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        }));
      }
    }

    const messagesPayload: { role: "system" | "user" | "assistant"; content: string }[] =
      [{ role: "system", content: SYSTEM_PROMPT }];

    if (!generalMode && contextSlug) {
      const topic = getTopicBySlug(contextSlug);
      if (topic) {
        messagesPayload.push({
          role: "system",
          content: `当前用户正在浏览知识点【${topic.title}】，摘要：${topic.summary}。请结合该知识点作答。`,
        });
      }
    }

    messagesPayload.push(...history, { role: "user", content: message });

    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: messagesPayload,
        temperature: 0.7,
        max_tokens: 600,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("deepseek error", res.status, text);
      return NextResponse.json({ error: "AI 调用失败" }, { status: 502 });
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = data.choices?.[0]?.message?.content || "抱歉，我没有得到回答。";

    if (chatSession) {
      await prisma.chatMessage.create({
        data: { sessionId: chatSession.id, role: "assistant", content: reply },
      });
    }

    return NextResponse.json({
      reply,
      sessionId: chatSession?.id || null,
    });
  } catch (err) {
    console.error("chat error", err);
    return NextResponse.json({ error: "聊天失败" }, { status: 500 });
  }
}
