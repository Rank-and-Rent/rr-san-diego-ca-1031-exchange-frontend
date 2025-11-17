export function IdentificationRules() {
  const rules = [
    {
      title: "Three Property Path",
      description:
        "List up to three properties of any value. Most San Diego, CA investors use this when each asset is well vetted and high certainty.",
    },
    {
      title: "Two Hundred Percent Path",
      description:
        "List as many properties as you like as long as the combined value stays within two hundred percent of the relinquished sale price. Useful when you chase multiple single tenant deals at once.",
    },
    {
      title: "Ninety Five Percent Path",
      description:
        "Identify any number of properties at any value but you must acquire at least ninety five percent of the identified value. Designed for portfolio scale exchanges.",
    },
  ];

  return (
    <section className="rounded-3xl border border-outline/40 bg-panel/50 p-6 shadow-lg">
      <p className="text-xs uppercase tracking-[0.35em] text-primary">
        Identification rules
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-heading">
        Keep every identification letter compliant
      </h3>
      <div className="mt-4 space-y-4">
        {rules.map((rule) => (
          <article
            key={rule.title}
            className="rounded-2xl border border-outline/40 bg-panel/60 p-4"
          >
            <p className="text-sm font-semibold text-heading">{rule.title}</p>
            <p className="mt-1 text-sm text-ink/70">{rule.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

