import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BootCalculator } from "@/components/tools/BootCalculator";
import { SITE_URL, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

const canonicalUrl = `${SITE_URL}/tools/boot-calculator`;

export const metadata: Metadata = {
  title: `Boot Calculator | 1031 Exchange ${PRIMARY_CITY}`,
  description:
    "Run the 1031 boot calculator to estimate cash boot, mortgage boot, and illustrative tax exposure for exchanges originating in San Diego, CA.",
  keywords:
    "boot calculator, mortgage boot, cash boot, 1031 exchange boot, San Diego",
  openGraph: {
    title: `Boot Calculator | 1031 Exchange ${PRIMARY_CITY}`,
    description:
      "Estimate cash boot, mortgage boot, and potential tax owed for San Diego 1031 exchanges with this interactive calculator.",
    type: "website",
    url: canonicalUrl,
  },
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function BootCalculatorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Boot Calculator", href: "/tools/boot-calculator" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Boot Calculator | 1031 Exchange ${PRIMARY_CITY}`,
    url: canonicalUrl,
    description:
      "Interactive 1031 boot calculator for cash and mortgage boot estimates covering San Diego, CA exchanges.",
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "1031 Boot Calculator",
    applicationCategory: "FinancialCalculator",
    operatingSystem: "Web",
    url: canonicalUrl,
    description:
      "Calculate cash boot, mortgage boot, and illustrative tax liabilities for 1031 exchanges in San Diego, CA.",
  };

  return (
    <>
      <div className="bg-paper text-ink">
        <section className="border-b border-outline/30 bg-panel/20 py-12">
          <div className="container space-y-4">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Calculator
            </p>
            <h1 className="text-4xl font-semibold text-heading">
              Boot Calculator
            </h1>
            <p className="max-w-3xl text-base text-ink/80">
              Determine whether your San Diego, CA exchange produces cash or
              mortgage boot. Enter your relinquished value, replacement value, cash
              received, and mortgage figures to view an instant breakdown with an
              illustrative tax estimate.
            </p>
          </div>
        </section>

        <section className="container space-y-8 py-12">
          <BootCalculator />

          <div className="rounded-2xl border border-outline/40 bg-panel/60 p-6">
            <p className="text-sm text-ink/70">
              <strong className="text-heading">Educational content only.</strong> Not tax, legal, or
              investment advice. Results are estimates only. Consult a qualified
              intermediary and tax advisor before making decisions.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Related resources
            </p>
            <h2 className="text-3xl font-semibold text-heading">
              Related Resources
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/timeline-assurance-program"
                  className="text-primary hover:underline"
                >
                  Timeline Assurance Program
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/nnn-deadline-playbook-san-diego"
                  className="text-primary hover:underline"
                >
                  NNN Deadline Playbook
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <Script id="boot-calculator-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="boot-calculator-webpage" type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </Script>
      <Script id="boot-calculator-tool" type="application/ld+json">
        {JSON.stringify(toolSchema)}
      </Script>
    </>
  );
}


