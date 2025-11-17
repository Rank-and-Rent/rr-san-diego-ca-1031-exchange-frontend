'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import type { PropertyTypeItem } from "@/data/types";
import { QueryInput } from "@/components/search/query-input";

interface PropertyTypeGridProps {
  propertyTypes: PropertyTypeItem[];
}

export function PropertyTypeGrid({
  propertyTypes,
}: PropertyTypeGridProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return propertyTypes;
    }
    return propertyTypes.filter((type) =>
      type.name.toLowerCase().includes(normalized),
    );
  }, [propertyTypes, query]);

  return (
    <div className="space-y-6">
      <QueryInput
        label="Search property types"
        placeholder="Example: pharmacy, drive thru, medical"
        onChange={setQuery}
        onSubmit={setQuery}
      />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-outline/40 bg-panel/60 p-5 text-sm text-ink/70">
          We did not find “{query}”.{" "}
          <Link
            href={`/contact?projectType=${encodeURIComponent(query || "Other")}`}
            className="text-primary hover:underline"
          >
            Contact intake
          </Link>{" "}
          for a custom property briefing.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((type) => (
            <article
              key={type.slug}
              className="rounded-2xl border border-outline/40 bg-panel/50 p-5"
            >
              <p className="text-xs uppercase tracking-wide text-ink/60">
                Asset lane
              </p>
              <h3 className="mt-1 text-xl font-semibold text-heading">
                {type.name}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{type.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink/60">
                {type.tenantExamples.slice(0, 2).map((tenant) => (
                  <span
                    key={`${type.slug}-${tenant}`}
                    className="rounded-full border border-outline px-3 py-1 uppercase tracking-wide"
                  >
                    {tenant}
                  </span>
                ))}
              </div>
              <Link
                href={type.route}
                className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Explore →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

