'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LocationItem } from "@/data/types";
import { QueryInput } from "@/components/search/query-input";

interface HomeLocationGridProps {
  locations: LocationItem[];
}

export function HomeLocationGrid({ locations }: HomeLocationGridProps) {
  const [query, setQuery] = useState("");

  const prioritizedLocations = useMemo(() => {
    return [...locations].sort((a, b) => {
      const priorityA = a.priority ?? Number.MAX_SAFE_INTEGER;
      const priorityB = b.priority ?? Number.MAX_SAFE_INTEGER;
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
      return a.name.localeCompare(b.name);
    });
  }, [locations]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return prioritizedLocations.slice(0, 8);
    }
    return prioritizedLocations
      .filter((location) => location.name.toLowerCase().includes(normalized))
      .slice(0, 8);
  }, [prioritizedLocations, query]);

  return (
    <div className="space-y-6">
      <QueryInput
        label="Search our San Diego service areas"
        placeholder="Example: Poway, Encinitas, Oceanside"
        onChange={setQuery}
        onSubmit={setQuery}
      />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-outline/40 bg-panel/50 p-5 text-sm text-ink/70">
          We can help with “{query}”.{" "}
          <Link
            href={`/contact?projectType=${encodeURIComponent("Other")}`}
            className="text-primary hover:underline"
          >
            Contact us and we will assign “Other” as your project type.
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((location) => (
            <Link
              key={location.slug}
              href={location.route}
              className="rounded-xl border border-outline/30 bg-paper/50 p-5 transition hover:border-primary hover:text-primary"
            >
              <p className="text-xs uppercase text-ink/60">{location.type}</p>
              <p className="mt-2 text-xl font-semibold text-heading">
                {location.name}
              </p>
              <p className="mt-2 text-sm text-ink/70">
                Replacement property watchlists, comps, and tenant demand notes.
              </p>
            </Link>
          ))}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/service-areas"
          className="rounded-full border border-outline px-5 py-2 text-sm font-semibold text-heading transition hover:border-primary hover:text-primary"
        >
          View all {locations.length} service areas
        </Link>
        <Link
          href="/contact?projectType=Other"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primaryfg transition hover:opacity-90"
        >
          Contact about Other markets
        </Link>
      </div>
    </div>
  );
}

