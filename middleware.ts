import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/auth|login|register).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const session = await getIronSession<{ user?: { id: string; email: string; name: string | null } }>(
    await cookies(),
    {
      password: process.env.SESSION_SECRET!,
      cookieName: "calculus-session",
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
      },
    }
  );

  if (!session.user) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("from", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
