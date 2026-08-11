import Link from "next/link";
import { notFound } from "next/navigation";
import katex from "katex";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getFormulaBySlug, getTopicBySlug } from "@/lib/content";

export default function FormulaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <FormulaDetail params={params} />
  );
}

async function FormulaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formula = getFormulaBySlug(slug);

  if (!formula) {
    notFound();
  }

  const formulaHtml = katex.renderToString(formula.latex, {
    throwOnError: false,
    displayMode: true,
  });

  const relatedTopics = formula.relatedTopicSlugs
    .map((s) => getTopicBySlug(s))
    .filter(Boolean);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-10">
        <Link
          href="/formulas"
          className="text-sm text-neutral-500 hover:text-neutral-800 underline"
        >
          ← 返回公式表
        </Link>

        <div className="mt-6">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold">{formula.title}</h1>
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-500">
              {formula.category}
            </span>
          </div>

          <div
            className="overflow-x-auto rounded-xl border border-neutral-200 bg-white p-6 text-center"
            dangerouslySetInnerHTML={{ __html: formulaHtml }}
          />

          <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
            <code className="rounded bg-neutral-100 px-2 py-1">{formula.plaintext}</code>
            {relatedTopics.length > 0 && (
              <div className="flex items-center gap-2">
                <span>相关知识点：</span>
                {relatedTopics.map((t) => (
                  <Link
                    key={t!.slug}
                    href={`/topics/${t!.slug}`}
                    className="text-neutral-600 hover:text-neutral-900 underline"
                  >
                    {t!.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {formula.usage && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold">使用方法</h2>
            <div className="mt-3 rounded-xl border border-neutral-200 bg-white p-5">
              <MarkdownRenderer content={formula.usage} />
            </div>
          </section>
        )}

        {formula.examples && formula.examples.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold">典型例题</h2>
            <div className="mt-3 space-y-4">
              {formula.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <h3 className="text-sm font-medium text-neutral-500">
                    例题 {idx + 1}
                  </h3>
                  <div className="mt-2">
                    <MarkdownRenderer content={ex.problem} />
                  </div>
                  <div className="mt-4 border-t border-neutral-100 pt-4">
                    <h4 className="text-sm font-medium text-neutral-500">解答</h4>
                    <div className="mt-2">
                      <MarkdownRenderer content={ex.solution} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <ChatWidget />
    </>
  );
}
