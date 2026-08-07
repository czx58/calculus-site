import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { getTopics } from "@/lib/content";

export async function GET() {
  const session = await getSession();
  if (!session.user) {
    return NextResponse.json({ recommendations: [] });
  }

  const attempts = await prisma.quizAttempt.findMany({
    where: { userId: session.user.id },
  });

  const stats: Record<string, { total: number; wrong: number }> = {};
  for (const a of attempts) {
    if (!stats[a.topicSlug]) stats[a.topicSlug] = { total: 0, wrong: 0 };
    stats[a.topicSlug].total += 1;
    if (!a.isCorrect) stats[a.topicSlug].wrong += 1;
  }

  const topics = getTopics();
  const recommendations = Object.entries(stats)
    .filter(([_, { total, wrong }]) => wrong >= 2 && wrong / total >= 0.5)
    .map(([slug, { total, wrong }]) => {
      const topic = topics.find((t) => t.slug === slug);
      return {
        slug,
        title: topic?.title || slug,
        total,
        wrong,
        rate: Math.round((wrong / total) * 100),
      };
    })
    .sort((a, b) => b.rate - a.rate)
    .slice(0, 5);

  return NextResponse.json({ recommendations });
}
