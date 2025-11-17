import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogPagination } from "@/components/blog/blog-pagination";
import BottomCTA from "@/components/BottomCTA";
import { blogPosts } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | 1031 Exchange Guides",
  description:
    "Insights on NNN investments, identification timelines, and underwriting best practices for 1031 exchange buyers.",
  alternates: {
    canonical: "/blog",
  },
};

const breadcrumbs = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "Blog", href: `${SITE_URL}/blog` },
];

const sortedPosts = [...blogPosts].sort((a, b) =>
  a.publishedAt < b.publishedAt ? 1 : -1,
);

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = sortedPosts;

  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/20 py-12">
        <div className="container space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Blog
          </p>
          <h1 className="text-4xl font-semibold text-heading">
            Helpful content for deadline driven investors.
          </h1>
          <p className="max-w-3xl text-base text-ink/80">
            Every article focuses on real exchange tactics: deadline planning,
            rent roll reviews, ground lease structures, zero cash flow options,
            and San Diego, CA market context.
          </p>
        </div>
      </section>

      {featuredPost ? (
        <section className="container py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                Featured story
              </p>
              <h2 className="text-4xl font-semibold text-heading">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-ink/70">
                {featuredPost.publishedAt} · {featuredPost.readTime}
              </p>
              <p className="text-base text-ink/80">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-2 text-xs text-ink/60">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-outline px-3 py-1 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primaryfg transition hover:opacity-90"
              >
                Read article
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="rounded-2xl border border-outline/30 bg-panel/40 p-2">
              <Image
                src={featuredPost.heroImage}
                alt={featuredPost.title}
                width={960}
                height={640}
                className="h-72 w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="container space-y-8 pb-12">
        <BlogPagination posts={otherPosts} />
      </section>
      <BottomCTA />
    </div>
  );
}

