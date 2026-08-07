import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session.user) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 });
  }

  try {
    const { questionId, topicSlug, isCorrect } = (await req.json()) as {
      questionId?: string;
      topicSlug?: string;
      isCorrect?: boolean;
    };

    if (!questionId || !topicSlug || typeof isCorrect !== "boolean") {
      return NextResponse.json({ error: "参数不完整" }, { status: 400 });
    }

    const attempt = await prisma.quizAttempt.create({
      data: {
        userId: session.user.id,
        questionId,
        topicSlug,
        isCorrect,
      },
    });

    return NextResponse.json({ attempt });
  } catch (err) {
    console.error("quiz attempt error", err);
    return NextResponse.json({ error: "提交失败" }, { status: 500 });
  }
}

export async function GET() {
  const session = await getSession();
  if (!session.user) {
    return NextResponse.json({ attempts: [] });
  }

  const attempts = await prisma.quizAttempt.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ attempts });
}
