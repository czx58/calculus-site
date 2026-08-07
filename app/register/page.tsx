"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("密码长度至少 6 位");
      return;
    }
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name: name || undefined }),
    });

    setLoading(false);
    if (res.ok) {
      router.push("/login");
    } else {
      const data = await res.json();
      setError(data.error || "注册失败");
    }
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-md flex-1 px-4 py-16">
        <h1 className="text-2xl font-semibold">注册</h1>
        <p className="mt-2 text-sm text-neutral-500">
          已有账号？<Link href="/login" className="underline">去登录</Link>
        </p>

        <form onSubmit={submit} className="mt-8 space-y-4">
          {error && (
            <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium">邮箱</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">昵称（可选）</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">密码</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400"
            />
          </div>
          <button
            disabled={loading}
            className="w-full rounded-lg bg-[#1a1a1a] py-2.5 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-50"
          >
            {loading ? "注册中…" : "注册"}
          </button>
        </form>
      </main>
    </>
  );
}
