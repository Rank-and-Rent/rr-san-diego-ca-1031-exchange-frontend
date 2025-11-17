'use client';

import { useState } from "react";

const milestones = [
  { label: "Sale closing", description: "Receive confirmation of escrow closing and wire transfer to QI." },
  { label: "Day 1 intake", description: "Kickoff call to align debt, equity, and tenant targets." },
  { label: "Day 15 check", description: "Deliver first draft of identification letter and lender preflight updates." },
  { label: "Day 30 diligence", description: "Deep dive into top candidates, schedule inspections, collect leases." },
  { label: "Day 45 submit", description: "Send signed identification letter to the QI." },
  { label: "Day 90 progress", description: "Confirm loan documents, estoppels, and closing statements." },
  { label: "Day 120 confirmation", description: "Finalize third party reports and resolve contingencies." },
  { label: "Day 180 completion", description: "Close on at least one replacement property and deliver documents to the QI." },
];

export function TimelineTracker() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="rounded-3xl border border-outline/40 bg-panel/50 p-6 shadow-lg">
      <p className="text-xs uppercase tracking-[0.35em] text-primary">
        Timeline tracker
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-heading">
        Visualize progress from sale to replacement closing
      </h3>
      <div className="mt-4 space-y-4">
        <div className="flex flex-wrap gap-2">
          {milestones.map((milestone, index) => (
            <button
              key={milestone.label}
              type="button"
              onClick={() => setCurrent(index)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                current === index
                  ? "border-primary bg-primary text-primaryfg"
                  : "border-outline/60 text-ink/70 hover:border-primary hover:text-primary"
              }`}
            >
              {milestone.label}
            </button>
          ))}
        </div>
        <div className="rounded-2xl border border-outline/40 bg-panel/60 p-4">
          <p className="text-sm font-semibold text-heading">
            {milestones[current].label}
          </p>
          <p className="mt-2 text-sm text-ink/70">
            {milestones[current].description}
          </p>
        </div>
      </div>
    </section>
  );
}

