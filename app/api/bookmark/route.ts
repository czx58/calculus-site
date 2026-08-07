import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export async function GET() {
  const session = await getSession();
  if (!session.user) {
    return NextResponse.json({ bookmarks: [] });
  }

  const bookmarks = await prisma.bookmark.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ bookmarks });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session.user) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 });
  }

  try {
    const { contentType, contentSlug, action } = (await req.json()) as {
      contentType?: string;
      contentSlug?: string;
      action?: "add" | "remove";
    };

    if (!contentType || !contentSlug || !action) {
      return NextResponse.json({ error: "参数不完整" }, { status: 400 });
    }

    if (action === "add") {
      await prisma.bookmark.upsert({
        where: {
          userId_contentType_contentSlug: {
            userId: session.user.id,
            contentType,
            contentSlug,
          },
        },
        update: {},
        create: { userId: session.user.id, contentType, contentSlug },
      });
    } else {
      await prisma.bookmark.deleteMany({
        where: { userId: session.user.id, contentType, contentSlug },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("bookmark error", err);
    return NextResponse.json({ error: "操作失败" }, { status: 500 });
  }
}
