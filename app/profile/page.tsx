import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import ChatHistory from "@/components/ChatHistory";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { getTopics, getFormulas, getTopicBySlug } from "@/lib/content";

export default async function ProfilePage() {
  const session = await getSession();
  if (!session.user) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  const attempts = await prisma.quizAttempt.findMany({
    where: { userId: session.user.id },
  });

  const total = attempts.length;
  const correct = attempts.filter((a) => a.isCorrect).length;
  const accuracy = total === 0 ? 0 : Math.round((correct / total) * 100);

  const stats: Record<string, { total: number; wrong: number }> = {};
  for (const a of attempts) {
    if (!stats[a.topicSlug]) stats[a.topicSlug] = { total: 0, wrong: 0 };
    stats[a.topicSlug].total += 1;
    if (!a.isCorrect) stats[a.topicSlug].wrong += 1;
  }

  const recommendations = Object.entries(stats)
    .filter(([_, { total, wrong }]) => wrong >= 2 && wrong / total >= 0.5)
    .map(([slug, { total, wrong }]) => {
      const topic = getTopicBySlug(slug);
      return {
        slug,
        title: topic?.title || slug,
        rate: Math.round((wrong / total) * 100),
      };
    })
    .sort((a, b) => b.rate - a.rate)
    .slice(0, 5);

  const bookmarks = await prisma.bookmark.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  const topics = getTopics();
  const formulas = getFormulas();

  const wrongQuestions = attempts
    .filter((a) => !a.isCorrect)
    .map((a) => {
      const topic = getTopicBySlug(a.topicSlug);
      return { ...a, topicTitle: topic?.title || a.topicSlug };
    });

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-semibold">个人中心</h1>
        <p className="mt-1 text-neutral-500">{user?.name || user?.email}</p>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <p className="text-sm text-neutral-500">测验次数</p>
            <p className="mt-2 text-3xl font-semibold">{total}</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <p className="text-sm text-neutral-500">正确率</p>
            <p className="mt-2 text-3xl font-semibold">{accuracy}%</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <p className="text-sm text-neutral-500">已学知识点</p>
            <p className="mt-2 text-3xl font-semibold">
              {new Set(attempts.map((a) => a.topicSlug)).size}
            </p>
          </div>
        </section>

        {recommendations.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-semibold">建议复习</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {recommendations.map((r) => (
                <Link
                  key={r.slug}
                  href={`/topics/${r.slug}`}
                  className="flex items-center justify-between rounded-xl border border-red-100 bg-red-50 px-4 py-3 hover:border-red-200"
                >
                  <span className="font-medium">{r.title}</span>
                  <span className="text-sm text-red-600">错误率 {r.rate}%</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10">
          <h2 className="mb-4 text-xl font-semibold">错题本</h2>
          {wrongQuestions.length === 0 ? (
            <p className="text-neutral-500">暂无错题记录，去做几道小测吧。</p>
          ) : (
            <div className="space-y-2">
              {wrongQuestions.slice(0, 10).map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3"
                >
                  <Link href={`/topics/${a.topicSlug}`} className="hover:underline">
                    {a.topicTitle}
                  </Link>
                  <span className="text-xs text-neutral-400">
                    {new Date(a.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-xl font-semibold">收藏夹</h2>
          {bookmarks.length === 0 ? (
            <p className="text-neutral-500">还没有收藏任何内容。</p>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {bookmarks.map((b) => {
                const title =
                  b.contentType === "topic"
                    ? topics.find((t) => t.slug === b.contentSlug)?.title
                    : formulas.find((f) => f.slug === b.contentSlug)?.title;
                const href =
                  b.contentType === "topic"
                    ? `/topics/${b.contentSlug}`
                    : `/formulas`;
                return (
                  <Link
                    key={b.id}
                    href={href}
                    className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3 hover:border-neutral-400"
                  >
                    <span className="font-medium">{title || b.contentSlug}</span>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500">
                      {b.contentType === "topic" ? "知识点" : "公式"}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        <ChatHistory />
      </main>
      <ChatWidget />
    </>
  );
}
