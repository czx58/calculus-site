import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = (await req.json()) as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return NextResponse.json({ error: "邮箱和密码不能为空" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "邮箱或密码错误" }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: "邮箱或密码错误" }, { status: 401 });
    }

    const forwardedProto = req.headers.get("x-forwarded-proto");
    const isSecure = forwardedProto
      ? forwardedProto === "https"
      : req.nextUrl.protocol === "https:";
    const session = await getSession(isSecure);
    session.user = { id: user.id, email: user.email, name: user.name };
    await session.save();

    return NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (err) {
    console.error("login error", err);
    return NextResponse.json({ error: "登录失败" }, { status: 500 });
  }
}
