'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { BlogPost } from "@/data/types";

interface BlogPaginationProps {
  posts: BlogPost[];
}

export function BlogPagination({ posts }: BlogPaginationProps) {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setItemsPerPage(media.matches ? 3 : 6);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const totalPages = Math.max(1, Math.ceil(posts.length / itemsPerPage));

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return posts.slice(start, start + itemsPerPage);
  }, [page, itemsPerPage, posts]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {paginatedPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-outline/40 bg-panel/50 p-5 shadow-lg"
          >
            <p className="text-xs uppercase tracking-wide text-ink/60">
              {post.readTime}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-heading">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
            <p className="mt-2 text-xs text-ink/60">
              Published {post.publishedAt}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink/60">
              {post.tags.map((tag) => (
                <span
                  key={`${post.slug}-${tag}`}
                  className="rounded-full border border-outline px-3 py-1 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-ink/70">
        <button
          type="button"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="rounded-full border border-outline px-4 py-2 font-semibold text-heading transition hover:border-primary hover:text-primary disabled:opacity-50"
        >
          Previous
        </button>
        <p>
          Page {page} of {totalPages}
        </p>
        <button
          type="button"
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page === totalPages}
          className="rounded-full border border-outline px-4 py-2 font-semibold text-heading transition hover:border-primary hover:text-primary disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

