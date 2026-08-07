"use client";

import { useEffect, useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";

export default function ChatHistory() {
  const [sessions, setSessions] = useState<
    { id: string; title: string; messages: { role: string; content: string }[] }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/chat/history")
      .then((r) => r.json())
      .then((data) => {
        setSessions(data.sessions || []);
        setLoading(false);
      });
  }, []);

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-semibold">AI 答疑历史</h2>
      <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-500">
        {loading ? (
          <p>加载中…</p>
        ) : sessions.length === 0 ? (
          <p>暂无聊天记录。</p>
        ) : (
          <div className="space-y-4">
            {sessions.map((s) => (
              <details key={s.id} className="rounded-lg border border-neutral-200">
                <summary className="cursor-pointer px-3 py-2 font-medium">{s.title}</summary>
                <div className="space-y-2 border-t border-neutral-200 px-3 py-3">
                  {s.messages.map((m, i) => (
                    <div key={i} className={m.role === "user" ? "text-neutral-800" : "text-neutral-600"}>
                      <span className="font-medium">{m.role === "user" ? "问" : "答"}：</span>
                      <MarkdownRenderer content={m.content} />
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
