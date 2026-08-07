"use client";

import { useState } from "react";
import Link from "next/link";
import katex from "katex";
import type { Formula } from "@/lib/content";

export default function FormulaCard({ formula }: { formula: Formula }) {
  const [plain, setPlain] = useState(false);

  const html = plain
    ? null
    : katex.renderToString(formula.latex, {
        throwOnError: false,
        displayMode: true,
      });

  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-medium">{formula.title}</h3>
        <span className="rounded-full bg-white px-2 py-0.5 text-xs text-neutral-500 border border-neutral-200">
          {formula.category}
        </span>
      </div>
      <div className="min-h-[3rem] overflow-x-auto rounded-lg bg-white p-3 text-center">
        {plain ? (
          <code className="text-sm text-neutral-700">{formula.plaintext}</code>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html || "" }} />
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <button
          onClick={() => setPlain(!plain)}
          className="text-xs text-neutral-500 hover:text-neutral-800 underline"
        >
          {plain ? "渲染公式" : "纯文本"}
        </button>
        {formula.relatedTopicSlugs.length > 0 && (
          <Link
            href={`/topics/${formula.relatedTopicSlugs[0]}`}
            className="text-xs text-neutral-600 hover:text-neutral-900 underline"
          >
            相关知识点
          </Link>
        )}
      </div>
    </div>
  );
}
