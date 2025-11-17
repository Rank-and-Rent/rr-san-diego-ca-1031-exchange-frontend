'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ServiceItem } from "@/data/types";
import { QueryInput } from "@/components/search/query-input";

interface Group {
  category: string;
  items: ServiceItem[];
}

interface HomeServiceGroupsProps {
  groups: Group[];
}

export function HomeServiceGroups({ groups }: HomeServiceGroupsProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) {
      return groups;
    }
    const normalized = query.toLowerCase();
    return groups
      .map((group) => ({
        category: group.category,
        items: group.items.filter((item) =>
          item.name.toLowerCase().includes(normalized),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [groups, query]);

  const hitCount = filtered.reduce(
    (count, group) => count + group.items.length,
    0,
  );

  return (
    <div className="space-y-6">
      <QueryInput
        label="Search services on this page"
        placeholder="Example: reverse exchange, rent roll"
        onChange={setQuery}
        onSubmit={setQuery}
      />
      {query && hitCount === 0 ? (
        <div className="rounded-2xl border border-outline/40 bg-panel/60 p-5 text-sm text-ink/70">
          We can help with “{query}”.{" "}
          <Link
            href={`/contact?projectType=${encodeURIComponent(query)}`}
            className="text-primary hover:underline"
          >
            Contact us and we will prefill the request.
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          {filtered.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-outline/40 bg-panel/60 p-6"
            >
              <p className="text-xs uppercase tracking-wide text-ink/60">
                {group.category}
              </p>
              <ul className="mt-4 space-y-3">
                {group.items.map((service) => (
                  <li
                    key={service.slug}
                    className="rounded-xl border border-outline/30 bg-paper/50 p-4"
                  >
                    <Link
                      href={service.route}
                      className="text-lg font-semibold text-heading hover:text-primary"
                    >
                      {service.name}
                    </Link>
                    <p className="mt-2 text-sm text-ink/80">
                      {service.short}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

