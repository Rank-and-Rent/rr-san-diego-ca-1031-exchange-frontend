import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogPosts } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/constants";
import BottomCTA from "@/components/BottomCTA";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: `${SITE_URL}/` },
    { label: "Blog", href: `${SITE_URL}/blog` },
    { label: post.title, href: `${SITE_URL}/blog/${post.slug}` },
  ];

  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/20 py-12">
        <div className="container space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            {post.readTime}
          </p>
          <h1 className="text-4xl font-semibold text-heading">
            {post.title}
          </h1>
          <p className="max-w-3xl text-base text-ink/80">{post.excerpt}</p>
          <p className="text-sm text-ink/60">
            Published {post.publishedAt}
          </p>
        </div>
      </section>

      <section className="container py-12 lg:grid lg:grid-cols-[minmax(0,1fr),320px] lg:gap-10">
        <div className="space-y-6">
          <Image
            src={post.heroImage}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full rounded-3xl border border-outline/40 object-cover"
            priority
          />
          <article className="prose prose-invert max-w-none space-y-4 text-base text-ink/80">
            {post.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>
        <aside className="mt-10 space-y-4 rounded-3xl border border-outline/40 bg-panel/40 p-6 text-sm text-ink/80 lg:mt-0">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Published
            </p>
            <p className="mt-1 text-heading">{post.publishedAt}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Reading time
            </p>
            <p className="mt-1 text-heading">{post.readTime}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Tags
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={`${post.slug}-${tag}`}
                  className="rounded-full border border-outline px-3 py-1 text-xs uppercase tracking-wide text-ink/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-outline/40 bg-panel/60 p-4">
            <p className="text-heading font-semibold">
              Need help applying this insight?
            </p>
            <p className="mt-2 text-ink/70">
              Share your timeline and we will plug these tactics directly into
              your exchange plan.
            </p>
            <Link
              href="/contact?projectType=Content%20Follow%20Up"
              className="mt-3 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primaryfg transition hover:opacity-90"
            >
              Contact intake
            </Link>
          </div>
        </aside>
      </section>
      <BottomCTA />
    </div>
  );
}

