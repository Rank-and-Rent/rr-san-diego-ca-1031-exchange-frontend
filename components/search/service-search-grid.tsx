'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ServiceItem } from "@/data/types";
import { QueryInput } from "@/components/search/query-input";

interface ServiceSearchGridProps {
  services: ServiceItem[];
  compact?: boolean;
}

export function ServiceSearchGrid({
  services,
  compact = false,
}: ServiceSearchGridProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return services;
    }
    return [...services]
      .filter((service) => {
        const haystack = [
          service.name,
          service.short,
          service.category,
          service.description,
          ...service.tags,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalized);
      })
      .sort((a, b) => {
        if (!normalized) return 0;
        const aExact = a.name.toLowerCase() === normalized ? 0 : 1;
        const bExact = b.name.toLowerCase() === normalized ? 0 : 1;
        if (aExact !== bExact) return aExact - bExact;
        return a.name.localeCompare(b.name);
      });
  }, [query, services]);

  return (
    <div className="space-y-6">
      <QueryInput
        label="Search services"
        placeholder="Example: reverse exchange, retail, rent roll"
        onChange={setQuery}
        onSubmit={(value) => setQuery(value)}
      />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-outline/40 bg-panel/50 p-8 text-center">
          <p className="text-lg font-semibold text-heading">
            We can help with “{query}”
          </p>
          <p className="mt-2 text-sm text-ink/70">
            No exact match in the library. Tap below and we will prefill your
            intake form.
          </p>
          <Link
            href={`/contact?projectType=${encodeURIComponent(query || "Other")}`}
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primaryfg transition hover:opacity-90"
          >
            Contact intake with this request
          </Link>
        </div>
      ) : (
        <div
          className={`grid gap-4 ${
            compact ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filtered.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl border border-outline/40 bg-panel/50 p-5 shadow-lg"
            >
              <p className="text-xs uppercase tracking-wide text-ink/60">
                {service.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-heading">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{service.short}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink/60">
                {service.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-outline px-3 py-1 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={service.route}
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Read service detail →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

