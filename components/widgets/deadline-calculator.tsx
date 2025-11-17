'use client';

import { addDays, format } from "date-fns";
import { useMemo, useState } from "react";

export function DeadlineCalculator() {
  const [saleDate, setSaleDate] = useState<string>("");

  const deadlines = useMemo(() => {
    if (!saleDate) {
      return null;
    }
    const base = new Date(`${saleDate}T00:00:00`);
    const day45 = addDays(base, 45);
    const day180 = addDays(base, 180);
    return {
      day45: format(day45, "PPP"),
      day180: format(day180, "PPP"),
    };
  }, [saleDate]);

  return (
    <section className="rounded-3xl border border-outline/40 bg-panel/50 p-6 shadow-lg">
      <p className="text-xs uppercase tracking-[0.35em] text-primary">
        Deadline Calculator
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-heading">
        Track your 45 and 180 day milestones
      </h3>
      <p className="mt-2 text-sm text-ink/70">
        Enter your sale closing date to see the identification and completion
        deadlines based on Pacific Time.
      </p>
      <div className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="deadline-sale-date"
            className="text-sm font-semibold text-heading"
          >
            Relinquished sale closing date
          </label>
          <input
            id="deadline-sale-date"
            type="date"
            value={saleDate}
            onChange={(event) => setSaleDate(event.target.value)}
            className="mt-1 w-full rounded-xl border border-outline/60 bg-panel/30 px-4 py-3 text-sm text-heading focus:border-primary focus:outline-none"
          />
        </div>
        {deadlines ? (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-outline/40 bg-panel/70 p-4">
              <p className="text-xs uppercase tracking-wide text-ink/60">
                45 day identification
              </p>
              <p className="text-xl font-semibold text-heading">
                {deadlines.day45}
              </p>
            </div>
            <div className="rounded-2xl border border-outline/40 bg-panel/70 p-4">
              <p className="text-xs uppercase tracking-wide text-ink/60">
                180 day completion
              </p>
              <p className="text-xl font-semibold text-heading">
                {deadlines.day180}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-ink/60">
            Add a date to calculate each deadline.
          </p>
        )}
      </div>
    </section>
  );
}

