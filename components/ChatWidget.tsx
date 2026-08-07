"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";

export default function ChatWidget({ contextSlug }: { contextSlug?: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);
  const [generalMode, setGeneralMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => setLoggedIn(!!data.user));
  }, []);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userMsg,
        sessionId,
        contextSlug,
        generalMode,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok && data.reply) {
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      if (data.sessionId) setSessionId(data.sessionId);
    } else {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.error || "AI 回复失败，请稍后再试。" },
      ]);
    }
  };

  const newChat = () => {
    setMessages([]);
    setSessionId(undefined);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end md:bottom-6 md:right-6">
      {open && (
        <div className="mb-3 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl md:h-[32rem] md:w-[26rem]">
          <div className="flex items-center justify-between border-b border-neutral-200 bg-[#1a1a1a] px-4 py-3 text-white">
            <div>
              <h3 className="font-medium">AI 答疑助手</h3>
              <p className="text-xs text-neutral-300">{loggedIn ? "已登录，记录将保存" : "未登录，仅当前会话有效"}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={newChat} title="新对话">
                <RotateCcw className="h-4 w-4" />
              </button>
              <button onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="rounded-lg bg-neutral-50 p-3 text-sm text-neutral-600">
                你好！我是你的高数学习助手。{contextSlug && !generalMode ? "我会结合当前知识点回答。" : "有问题尽管问我。"}
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`rounded-xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto max-w-[85%] bg-[#1a1a1a] text-white"
                    : "max-w-[90%] bg-neutral-100 text-neutral-800"
                }`}
              >
                {m.role === "user" ? (
                  m.content
                ) : (
                  <MarkdownRenderer content={m.content} />
                )}
              </div>
            ))}
            {loading && (
              <div className="max-w-[80%] rounded-xl bg-neutral-100 px-3 py-2 text-sm text-neutral-500">
                思考中…
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-neutral-200 p-3">
            {contextSlug && (
              <label className="mb-2 flex cursor-pointer items-center gap-2 text-xs text-neutral-600">
                <input
                  type="checkbox"
                  checked={generalMode}
                  onChange={(e) => setGeneralMode(e.target.checked)}
                  className="h-3.5 w-3.5"
                />
                通用模式（不结合当前知识点）
              </label>
            )}
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="输入问题…"
                className="flex-1 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm outline-none"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a] text-white disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-lg hover:bg-neutral-800"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
}
