import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";

export type SessionUser = {
  id: string;
  email: string;
  name: string | null;
};

export type SessionData = {
  user?: SessionUser;
};

const sessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "calculus-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  },
};

export async function getSession(): Promise<IronSession<SessionData>> {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}
