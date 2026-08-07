import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import FormulaCard from "@/components/FormulaCard";
import Quiz from "@/components/Quiz";
import BookmarkButton from "@/components/BookmarkButton";
import {
  getTopicBySlug,
  getTopics,
  getChapterBySlug,
  getFormulasByTopic,
  getQuizzesByTopic,
} from "@/lib/content";

export async function generateStaticParams() {
  return getTopics().map((t) => ({ slug: t.slug }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  const chapter = getChapterBySlug(topic.chapterSlug);
  const allTopics = getTopics();
  const idx = allTopics.findIndex((t) => t.slug === slug);
  const prev = allTopics[idx - 1];
  const next = allTopics[idx + 1];
  const formulas = getFormulasByTopic(slug);
  const quizzes = getQuizzesByTopic(slug);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl flex-1 px-4 py-10">
        <div className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">首页</Link>
          <span className="mx-2">/</span>
          <Link href={`/chapters/${topic.chapterSlug}`} className="hover:underline">
            {chapter?.title || topic.chapterSlug}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-800">{topic.title}</span>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">{topic.title}</h1>
            <p className="mt-2 text-neutral-600">{topic.summary}</p>
          </div>
          <BookmarkButton contentType="topic" contentSlug={topic.slug} />
        </div>

        <div className="flex flex-wrap gap-2">
          {topic.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <article className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
          <MarkdownRenderer content={topic.content} />
        </article>

        {formulas.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-semibold">相关公式</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {formulas.map((f) => (
                <FormulaCard key={f.slug} formula={f} />
              ))}
            </div>
          </section>
        )}

        <Quiz questions={quizzes} topicSlug={slug} />

        <div className="mt-10 flex justify-between border-t border-neutral-200 pt-6 text-sm">
          {prev ? (
            <Link href={`/topics/${prev.slug}`} className="text-neutral-600 hover:underline">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/topics/${next.slug}`} className="text-neutral-600 hover:underline">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>
      <ChatWidget contextSlug={slug} />
    </>
  );
}
