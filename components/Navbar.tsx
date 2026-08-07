"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, User, BookOpen, LogOut, Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<{ id: string; email: string; name: string | null } | null>(null);
  const [q, setQ] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => setUser(data.user));
  }, []);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) {
      router.push(`/?q=${encodeURIComponent(q.trim())}`);
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <BookOpen className="h-5 w-5" />
          高数助手
        </Link>

        <form onSubmit={onSearch} className="hidden md:flex items-center relative">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="搜索知识点 / 公式"
            className="w-64 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 pl-9 text-sm outline-none focus:border-neutral-400"
          />
          <Search className="absolute left-3 h-4 w-4 text-neutral-400" />
        </form>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-neutral-600">首页</Link>
          <Link href="/formulas" className="hover:text-neutral-600">公式表</Link>
          {user ? (
            <>
              <Link href="/profile" className="flex items-center gap-1 hover:text-neutral-600">
                <User className="h-4 w-4" />
                {user.name || user.email.split("@")[0]}
              </Link>
              <button onClick={logout} className="flex items-center gap-1 hover:text-neutral-600">
                <LogOut className="h-4 w-4" />
                退出
              </button>
            </>
          ) : (
            <Link href="/login" className="rounded-full bg-[#1a1a1a] px-4 py-1.5 text-white hover:bg-neutral-800">
              登录
            </Link>
          )}
        </nav>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 px-4 py-4 space-y-3">
          <form onSubmit={onSearch} className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜索知识点 / 公式"
              className="w-full rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 pl-9 text-sm outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
          </form>
          <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm font-medium">首页</Link>
          <Link href="/formulas" onClick={() => setMobileOpen(false)} className="block text-sm font-medium">公式表</Link>
          {user ? (
            <>
              <Link href="/profile" onClick={() => setMobileOpen(false)} className="block text-sm font-medium">个人中心</Link>
              <button onClick={logout} className="block text-sm font-medium">退出</button>
            </>
          ) : (
            <Link href="/login" onClick={() => setMobileOpen(false)} className="block text-sm font-medium">登录</Link>
          )}
        </div>
      )}
    </header>
  );
}
