'use client';

import Link from "next/link";
import Image from "next/image";
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
  emptyRedirectLabel = "Contact Us",
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
    <div className="space-y-8">
      <QueryInput
        label="Search service areas"
        placeholder="Example: La Jolla, Poway, Oceanside"
        onChange={setQuery}
        onSubmit={(value) => setQuery(value)}
      />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-[#0F2A3D]/10 bg-white p-8 text-center">
          <p className="text-lg font-medium text-[#0F2A3D] mb-2">
            Need a different market?
          </p>
          <p className="text-[#0F2A3D]/60 mb-4">
            We will connect you with an advisor and prefill your request.
          </p>
          <Link
            href={`/contact?projectType=${encodeURIComponent(query || "Other")}`}
            className="inline-block bg-[#0F2A3D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a3d54] transition"
          >
            {emptyRedirectLabel}
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((location) => (
            <Link
              key={location.slug}
              href={location.route}
              className="group block bg-white rounded-2xl overflow-hidden border border-[#0F2A3D]/10 hover:border-[#0F2A3D]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={location.heroImage}
                  alt={location.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-wider text-white/70 mb-1">
                    {location.type}
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {location.name}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#0F2A3D]/70 mb-4 line-clamp-2">
                  {location.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0F2A3D] group-hover:gap-3 transition-all">
                  Explore {location.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
