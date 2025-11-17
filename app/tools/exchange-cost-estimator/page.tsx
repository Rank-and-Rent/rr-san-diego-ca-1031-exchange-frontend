import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ExchangeCostEstimator } from "@/components/tools/ExchangeCostEstimator";
import { SITE_URL, PRIMARY_CITY } from "@/lib/constants";

const canonicalUrl = `${SITE_URL}/tools/exchange-cost-estimator`;

export const metadata: Metadata = {
  title: "Exchange Cost Estimator | 1031 Exchange San Diego",
  description:
    "Estimate qualified intermediary, escrow, title insurance, and Harris County recording fees for 1031 exchanges anchored in San Diego, CA.",
  keywords:
    "exchange cost estimator, 1031 fees, title insurance, escrow costs, San Diego",
  openGraph: {
    title: "Exchange Cost Estimator | 1031 Exchange San Diego",
    description:
      "Project 1031 exchange transaction costs including QI fees, escrow, title insurance, and Texas recording charges.",
    type: "website",
    url: canonicalUrl,
  },
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function ExchangeCostEstimatorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Exchange Cost Estimator", href: "/tools/exchange-cost-estimator" },
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
    name: "Exchange Cost Estimator | 1031 Exchange San Diego",
    url: canonicalUrl,
    description:
      "Interactive calculator for estimating QI, escrow, title, and Harris County recording fees on San Diego 1031 exchanges.",
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "1031 Exchange Cost Estimator",
    applicationCategory: "FinancialCalculator",
    operatingSystem: "Web",
    url: canonicalUrl,
    description:
      "Calculate expected 1031 exchange costs, including QI, escrow, title insurance, and county recording fees.",
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
              Exchange Cost Estimator
            </h1>
            <p className="max-w-3xl text-base text-ink/80">
              Model the transaction costs tied to your 1031 exchange. Enter the
              replacement property value, qualified intermediary percentage, escrow
              fee, title rate, and recording charges to view a full cost breakdown.
            </p>
          </div>
        </section>

        <section className="container space-y-8 py-12">
          <ExchangeCostEstimator />

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
                  href="/services/lender-preflight-coordination"
                  className="text-primary hover:underline"
                >
                  Lender Preflight Coordination
                </Link>
              </li>
              <li>
                <Link
                  href="/services/timeline-assurance-program"
                  className="text-primary hover:underline"
                >
                  Timeline Assurance Program
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <Script id="exchange-cost-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="exchange-cost-webpage" type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </Script>
      <Script id="exchange-cost-tool" type="application/ld+json">
        {JSON.stringify(toolSchema)}
      </Script>
    </>
  );
}


