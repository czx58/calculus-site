import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import { getChapterBySlug, getTopicsByChapter, getChapters } from "@/lib/content";

export async function generateStaticParams() {
  return getChapters().map((c) => ({ slug: c.slug }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) notFound();

  const topics = getTopicsByChapter(slug);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl flex-1 px-4 py-10">
        <div className="mb-8">
          <Link href="/" className="text-sm text-neutral-500 hover:underline">
            ← 返回首页
          </Link>
          <h1 className="mt-4 text-3xl font-semibold">{chapter.title}</h1>
          <p className="mt-2 text-neutral-600">{chapter.description}</p>
        </div>

        <div className="mb-8 rounded-xl bg-neutral-50 p-5">
          <h2 className="mb-2 font-medium">本章学习目标</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            {chapter.objectives.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>

        <h2 className="mb-5 text-xl font-semibold">知识点列表</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/topics/${t.slug}`}
              className="rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-400"
            >
              <h3 className="font-medium">{t.title}</h3>
              <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                {t.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <ChatWidget />
    </>
  );
}
