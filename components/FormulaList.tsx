"use client";

import { useState } from "react";
import FormulaCard from "./FormulaCard";
import type { Formula } from "@/lib/content";

export default function FormulaList({ formulas }: { formulas: Formula[] }) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("全部");

  const categories = ["全部", ...Array.from(new Set(formulas.map((f) => f.category)))];

  const filtered = formulas.filter((f) => {
    const matchCategory = category === "全部" || f.category === category;
    const text = (f.title + f.plaintext + f.category + f.latex).toLowerCase();
    const matchQ = !q || text.includes(q.toLowerCase());
    return matchCategory && matchQ;
  });

  const highlight = (text: string) => {
    if (!q) return text;
    const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? <strong key={i} className="text-[#1a1a1a]">{part}</strong> : part
    );
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜索公式名称或表达式"
          className="w-full rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm outline-none md:w-72"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-3 py-1 text-xs font-medium border ${
                category === c
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-neutral-500">未找到匹配公式。</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((f) => (
            <div key={f.slug}>
              <FormulaCard formula={f} />
              <p className="mt-1 text-center text-sm text-neutral-500">
                {highlight(f.title)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
