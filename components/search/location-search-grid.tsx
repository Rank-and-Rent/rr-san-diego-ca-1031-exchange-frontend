'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LocationItem } from "@/data/types";
import { QueryInput } from "@/components/search/query-input";

interface LocationSearchGridProps {
  locations: LocationItem[];
  limit?: number;
  emptyRedirectLabel?: string;
}

export function LocationSearchGrid({
  locations,
  limit,
  emptyRedirectLabel = "Contact intake",
}: LocationSearchGridProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const all = limit ? locations.slice(0, limit) : locations;
    if (!normalized) {
      return all;
    }
    return all.filter((location) => {
      const haystack = [
        location.name,
        location.type,
        location.description,
        ...location.highlights,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [locations, limit, query]);

  return (
    <div className="space-y-6">
      <QueryInput
        label="Search service areas"
        placeholder="Example: La Jolla, Poway, Oceanside"
        onChange={setQuery}
        onSubmit={(value) => setQuery(value)}
      />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-outline/40 bg-panel/50 p-6 text-center">
          <p className="text-lg font-semibold text-heading">
            Need a different market?
          </p>
          <p className="mt-2 text-sm text-ink/70">
            We will connect you with an advisor and prefill your request.
          </p>
          <Link
            href={`/contact?projectType=${encodeURIComponent(query || "Other")}`}
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primaryfg transition hover:opacity-90"
          >
            {emptyRedirectLabel}
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((location) => (
            <article
              key={location.slug}
              className="rounded-2xl border border-outline/40 bg-panel/50 p-5 shadow-lg"
            >
              <p className="text-xs uppercase tracking-wide text-ink/60">
                {location.type}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-heading">
                {location.name}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{location.description}</p>
              <Link
                href={location.route}
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Open service area →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

