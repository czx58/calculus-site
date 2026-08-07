"use client";

import { useEffect, useState } from "react";
import type { QuizQuestion } from "@/lib/content";
import MarkdownRenderer from "./MarkdownRenderer";

export default function Quiz({
  questions,
  topicSlug,
}: {
  questions: QuizQuestion[];
  topicSlug: string;
}) {
  const [user, setUser] = useState<{ id: string } | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, { isCorrect: boolean; shown: boolean }>>({});

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => setUser(data.user));
  }, []);

  const submit = async (q: QuizQuestion) => {
    const raw = answers[q.id] || "";
    const userAnswer = raw.trim();
    if (!userAnswer) return;

    const correct = q.type === "choice"
      ? userAnswer.toUpperCase() === q.answer.toUpperCase()
      : userAnswer.replace(/\s/g, "").toLowerCase() === q.answer.replace(/\s/g, "").toLowerCase();

    setResults((prev) => ({ ...prev, [q.id]: { isCorrect: correct, shown: true } }));

    if (user) {
      await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: q.id, topicSlug, isCorrect: correct }),
      });
    }
  };

  if (questions.length === 0) return null;

  return (
    <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6">
      <h2 className="mb-4 text-xl font-semibold">小测验</h2>
      {!user && (
        <p className="mb-4 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">
          登录后可记录错题并获得复习推荐。
        </p>
      )}
      <div className="space-y-6">
        {questions.map((q, idx) => (
          <div key={q.id} className="border-b border-neutral-100 pb-6 last:border-0">
            <div className="mb-3 font-medium">
              {idx + 1}. <MarkdownRenderer content={q.question} />
            </div>
            {q.type === "choice" && q.options && (
              <div className="mb-3 space-y-2">
                {q.options.map((opt, i) => {
                  const letter = String.fromCharCode(65 + i);
                  return (
                    <label
                      key={letter}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50"
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={letter}
                        disabled={results[q.id]?.shown}
                        checked={answers[q.id] === letter}
                        onChange={(e) =>
                          setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                        }
                        className="h-4 w-4"
                      />
                      <span className="text-sm">{letter}. {opt}</span>
                    </label>
                  );
                })}
              </div>
            )}
            {q.type === "fill" && (
              <input
                value={answers[q.id] || ""}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                disabled={results[q.id]?.shown}
                placeholder="请输入答案"
                className="mb-3 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none"
              />
            )}
            {!results[q.id]?.shown && (
              <button
                onClick={() => submit(q)}
                className="rounded-lg bg-[#1a1a1a] px-4 py-2 text-sm text-white hover:bg-neutral-800"
              >
                提交
              </button>
            )}
            {results[q.id]?.shown && (
              <div
                className={`rounded-lg px-3 py-2 text-sm ${
                  results[q.id].isCorrect
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                <p>{results[q.id].isCorrect ? "回答正确" : `回答错误，正确答案是：${q.answer}`}</p>
                <div className="mt-1 text-neutral-600">
                  <MarkdownRenderer content={q.explanation} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
