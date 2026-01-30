'use client';

import Link from "next/link";
import Image from "next/image";
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
      type.name.toLowerCase().includes(normalized) ||
      type.summary.toLowerCase().includes(normalized) ||
      type.tenantExamples.some(t => t.toLowerCase().includes(normalized)),
    );
  }, [propertyTypes, query]);

  return (
    <div className="space-y-8">
      <QueryInput
        label="Search property types"
        placeholder="Example: pharmacy, drive thru, medical"
        onChange={setQuery}
        onSubmit={setQuery}
      />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-[#0F2A3D]/10 bg-white p-8 text-center">
          <p className="text-lg font-medium text-[#0F2A3D] mb-2">
            No results for &quot;{query}&quot;
          </p>
          <p className="text-[#0F2A3D]/60 mb-4">
            We can help you find the right property type for your exchange.
          </p>
          <Link
            href={`/contact?projectType=${encodeURIComponent(query || "Other")}`}
            className="inline-block bg-[#0F2A3D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a3d54] transition"
          >
            Contact Us
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((type) => (
            <Link
              key={type.slug}
              href={type.route}
              className="group block bg-white rounded-2xl overflow-hidden border border-[#0F2A3D]/10 hover:border-[#0F2A3D]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={type.heroImage}
                  alt={type.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-wider text-white/70 mb-1">
                    Property Type
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {type.name}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#0F2A3D]/70 mb-4 line-clamp-2">
                  {type.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {type.tenantExamples.slice(0, 3).map((tenant) => (
                    <span
                      key={`${type.slug}-${tenant}`}
                      className="text-xs px-3 py-1 bg-[#0F2A3D]/5 text-[#0F2A3D]/70 rounded-full"
                    >
                      {tenant}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0F2A3D] group-hover:gap-3 transition-all">
                  Learn more
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
