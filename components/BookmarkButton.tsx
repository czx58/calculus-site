"use client";

import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";

export default function BookmarkButton({
  contentType,
  contentSlug,
}: {
  contentType: "topic" | "formula";
  contentSlug: string;
}) {
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/bookmark")
      .then((r) => r.json())
      .then((data) => {
        const found = data.bookmarks.find(
          (b: { contentType: string; contentSlug: string }) =>
            b.contentType === contentType && b.contentSlug === contentSlug
        );
        setBookmarked(!!found);
      });
  }, [contentType, contentSlug]);

  const toggle = async () => {
    setLoading(true);
    await fetch("/api/bookmark", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentType,
        contentSlug,
        action: bookmarked ? "remove" : "add",
      }),
    });
    setBookmarked(!bookmarked);
    setLoading(false);
  };

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition ${
        bookmarked
          ? "border-neutral-800 bg-[#1a1a1a] text-white"
          : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
      }`}
    >
      <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
      {bookmarked ? "已收藏" : "收藏"}
    </button>
  );
}
