import Link from "next/link";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import FormulaCard from "@/components/FormulaCard";
import { getChapters, searchContent } from "@/lib/content";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const chapters = getChapters();
  const searchResults = q ? searchContent(q) : null;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {!searchResults && (
          <section className="border-b border-neutral-200 bg-neutral-50 px-4 py-16 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-[#1a1a1a]">
              高数助手
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-neutral-600">
              一个干净、极简、响应式的高等数学上册学习网站。查概念、看公式、做小测、问 AI。
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/formulas"
                className="rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium hover:bg-neutral-50"
              >
                浏览公式表
              </Link>
              <Link
                href="/login"
                className="rounded-full bg-[#1a1a1a] px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                登录 / 注册
              </Link>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-5xl px-4 py-10">
          {searchResults ? (
            <>
              <h2 className="mb-6 text-2xl font-semibold">
                “{q}” 的搜索结果
              </h2>
              {searchResults.topics.length === 0 && searchResults.formulas.length === 0 && (
                <p className="text-neutral-500">没有找到相关内容。</p>
              )}
              {searchResults.topics.length > 0 && (
                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-medium">知识点</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {searchResults.topics.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/topics/${t.slug}`}
                        className="rounded-xl border border-neutral-200 p-4 hover:border-neutral-400"
                      >
                        <p className="font-medium">{t.title}</p>
                        <p className="mt-1 text-sm text-neutral-500">{t.summary}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {searchResults.formulas.length > 0 && (
                <div>
                  <h3 className="mb-3 text-lg font-medium">公式</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {searchResults.formulas.map((f) => (
                      <FormulaCard key={f.slug} formula={f} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <h2 className="mb-6 text-2xl font-semibold">章节导航</h2>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {chapters.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/chapters/${c.slug}`}
                    className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-400 hover:shadow-sm"
                  >
                    <span className="text-xs font-medium text-neutral-400">
                      第 {c.order} 章
                    </span>
                    <h3 className="mt-2 text-lg font-semibold group-hover:text-neutral-700">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500 line-clamp-2">
                      {c.description}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>
      </main>
      <ChatWidget />
    </>
  );
}
