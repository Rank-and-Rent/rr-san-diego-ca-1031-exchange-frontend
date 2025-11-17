'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import site from "@/content/site.json";
import { servicesData, propertyTypesData, locationsData } from "@/data";

export function StickyCTA() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const projectType = useMemo(() => {
    if (!pathname) return undefined;
    if (pathname.startsWith("/services/")) {
      const slug = pathname.split("/")[2];
      return servicesData.find((service) => service.slug === slug)?.name;
    }
    if (pathname.startsWith("/property-types/")) {
      const slug = pathname.split("/")[2];
      return propertyTypesData.find((type) => type.slug === slug)?.name;
    }
    if (pathname.startsWith("/service-areas/")) {
      const slug = pathname.split("/")[2];
      const match = locationsData.find((location) => location.slug === slug);
      if (match) {
        return `${match.name} property search`;
      }
    }
    return undefined;
  }, [pathname]);

  const contactHref = projectType
    ? `/contact?projectType=${encodeURIComponent(projectType)}`
    : "/contact#contact-form";

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {isOpen ? (
        <div className="flex w-64 flex-col gap-2 rounded-2xl border border-outline bg-panel/90 p-4 shadow-2xl">
          <p className="text-sm font-semibold text-heading">
            Ready to match properties?
          </p>
          <Link
            href={contactHref}
            className="hidden rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primaryfg transition hover:opacity-90 md:block"
          >
            Contact intake team
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={contactHref}
              className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primaryfg transition hover:opacity-90"
            >
              Contact
            </Link>
            <a
              href={`tel:${site.phoneDigits}`}
              className="flex-1 rounded-full border border-outline px-4 py-2 text-center text-sm font-semibold text-heading transition hover:bg-outline/40"
            >
              Call
            </a>
          </div>
          <a
            href={`tel:${site.phoneDigits}`}
            className="hidden rounded-full border border-outline px-4 py-2 text-center text-sm font-semibold text-heading transition hover:bg-outline/40 md:block"
          >
            Call {site.phone}
          </a>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full border border-outline bg-panel/80 px-4 py-2 text-sm font-semibold text-heading transition hover:border-primary hover:text-primary"
        aria-expanded={isOpen}
      >
        {isOpen ? "Hide quick help" : "Need quick help?"}
      </button>
    </div>
  );
}

