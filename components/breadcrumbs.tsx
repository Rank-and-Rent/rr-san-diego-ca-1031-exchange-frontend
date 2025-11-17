import Link from "next/link";
import { Fragment } from "react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <Fragment key={item.href}>
              <Link
                href={item.href}
                className="text-ink/70 transition hover:text-primary"
              >
                {item.label}
              </Link>
              {index < items.length - 1 ? (
                <span aria-hidden="true" className="text-ink/50">
                  /
                </span>
              ) : null}
            </Fragment>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

