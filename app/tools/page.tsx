import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { exchangeTools } from "@/data/tools";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "1031 Exchange Calculators & Checkers | 1031 Exchange of San Diego",
  description:
    "Explore interactive 1031 exchange calculators, boot estimators, and identification rule checkers built for San Diego investors who need precise planning tools.",
  keywords:
    "1031 exchange tools, boot calculator, identification rules, exchange cost estimator",
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
  openGraph: {
    title: "1031 Exchange Calculators & Checkers | 1031 Exchange of San Diego",
    description:
      "Access interactive calculators for boot, exchange costs, and identification rule compliance tailored to San Diego 1031 exchange investors.",
    url: `${SITE_URL}/tools`,
    type: "website",
  },
};

export default function ToolsIndexPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
  ];

  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/20 py-12">
        <div className="container space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Tools
          </p>
          <h1 className="text-4xl font-semibold text-heading">
            1031 Exchange Tools
          </h1>
          <p className="max-w-3xl text-base text-ink/80">
            Run quick calculations, validate identification strategies, and
            estimate exchange expenses. Each tool updates in real time and is
            optimized for exchange investors operating in San Diego, CA and
            beyond.
          </p>
        </div>
      </section>

      <section className="container space-y-8 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {exchangeTools.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.href}
              className="group rounded-2xl border border-outline/40 bg-panel/50 p-6 transition hover:border-primary hover:bg-panel/60"
            >
              <tool.icon className="mb-4 h-10 w-10 text-primary" />
              <h2 className="text-2xl font-semibold text-heading">
                {tool.name}
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                {tool.shortDescription}
              </p>
              <p className="mt-4 text-sm font-semibold text-primary group-hover:underline">
                Launch tool →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}


