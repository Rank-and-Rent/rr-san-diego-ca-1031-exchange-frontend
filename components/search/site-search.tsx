'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost, LocationItem, ServiceItem } from "@/data/types";
import { QueryInput } from "@/components/search/query-input";

interface SiteSearchProps {
  services: ServiceItem[];
  locations: LocationItem[];
  posts: BlogPost[];
  initialQuery?: string;
}

export function SiteSearch({
  services,
  locations,
  posts,
  initialQuery = "",
}: SiteSearchProps) {
  const [query, setQuery] = useState(initialQuery);

  const normalized = query.trim().toLowerCase();

  const serviceHits = useMemo(() => {
    if (!normalized) return [];
    return services.filter((service) =>
      service.name.toLowerCase().includes(normalized),
    );
  }, [normalized, services]);

  const locationHits = useMemo(() => {
    if (!normalized) return [];
    return locations.filter((location) =>
      location.name.toLowerCase().includes(normalized),
    );
  }, [normalized, locations]);

  const postHits = useMemo(() => {
    if (!normalized) return [];
    return posts.filter((post) =>
      post.title.toLowerCase().includes(normalized),
    );
  }, [normalized, posts]);

  const hasResults =
    serviceHits.length + locationHits.length + postHits.length > 0;

  return (
    <div className="space-y-6">
      <QueryInput
        label="Search across the site"
        placeholder="Example: ground lease, Poway, timeline"
        initialValue={initialQuery}
        onChange={setQuery}
        onSubmit={setQuery}
      />
      {normalized && hasResults ? (
        <div className="space-y-6">
          {serviceHits.length ? (
            <ResultSection title="Services">
              {serviceHits.map((service) => (
                <ResultCard
                  key={service.slug}
                  title={service.name}
                  description={service.short}
                  href={service.route}
                />
              ))}
            </ResultSection>
          ) : null}
          {locationHits.length ? (
            <ResultSection title="Service Areas">
              {locationHits.map((location) => (
                <ResultCard
                  key={location.slug}
                  title={location.name}
                  description={location.description}
                  href={location.route}
                />
              ))}
            </ResultSection>
          ) : null}
          {postHits.length ? (
            <ResultSection title="Blog">
              {postHits.map((post) => (
                <ResultCard
                  key={post.slug}
                  title={post.title}
                  description={post.excerpt}
                  href={`/blog/${post.slug}`}
                />
              ))}
            </ResultSection>
          ) : null}
        </div>
      ) : normalized ? (
        <div className="rounded-2xl border border-outline/40 bg-panel/50 p-6 text-sm text-ink/70">
          We could not find “{query}”.{" "}
          <Link
            href={`/contact?projectType=${encodeURIComponent(query || "Other")}`}
            className="text-primary hover:underline"
          >
            Contact intake
          </Link>{" "}
          and we will prefill your request.
        </div>
      ) : (
        <p className="text-sm text-ink/70">
          Start typing to search services, service areas, and articles.
        </p>
      )}
    </div>
  );
}

function ResultSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-heading">{title}</p>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {children}
      </div>
    </div>
  );
}

function ResultCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-outline/40 bg-panel/60 p-4 transition hover:border-primary hover:text-primary"
    >
      <p className="text-lg font-semibold text-heading">{title}</p>
      <p className="mt-1 text-sm text-ink/70">{description}</p>
    </Link>
  );
}

