'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ServiceItem } from "@/data/types";
import { QueryInput } from "@/components/search/query-input";

interface RelatedServicesProps {
  services: ServiceItem[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return services.slice(0, 4);
    }
    return services
      .filter((service) =>
        service.name.toLowerCase().includes(normalized),
      )
      .slice(0, 4);
  }, [query, services]);

  return (
    <div className="space-y-4">
      <QueryInput
        label="Filter related services"
        placeholder="Start typing a service name"
        onChange={setQuery}
        onSubmit={setQuery}
      />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-[#0F2A3D]/10 bg-white p-5 text-sm text-[#0F2A3D]/70">
          We can help with "{query}".{" "}
          <Link
            href={`/contact?projectType=${encodeURIComponent(query)}`}
            className="text-[#0F2A3D] font-medium hover:underline"
          >
            Contact intake
          </Link>{" "}
          for a tailored plan.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl border border-[#0F2A3D]/10 bg-white p-4 hover:shadow-md transition"
            >
              <p className="text-xs uppercase tracking-wide text-[#0F2A3D]/50">
                {service.category}
              </p>
              <h4 className="mt-1 text-lg font-semibold text-[#0F2A3D]">
                {service.name}
              </h4>
              <p className="mt-2 text-sm text-[#0F2A3D]/70">{service.short}</p>
              <Link
                href={service.route}
                className="mt-3 inline-flex text-sm font-semibold text-[#0F2A3D] hover:underline"
              >
                Open service →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
