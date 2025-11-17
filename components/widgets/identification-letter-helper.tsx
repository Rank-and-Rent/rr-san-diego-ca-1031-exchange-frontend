'use client';

import { useMemo, useState } from "react";

export function IdentificationLetterHelper() {
  const [taxpayer, setTaxpayer] = useState("");
  const [relinquished, setRelinquished] = useState("");
  const [properties, setProperties] = useState<string[]>([""]);

  const letter = useMemo(() => {
    const body = [
      taxpayer ? `Taxpayer: ${taxpayer}` : "",
      relinquished ? `Relinquished property: ${relinquished}` : "",
      "Replacement properties:",
      properties
        .filter(Boolean)
        .map((item, index) => `${index + 1}. ${item}`)
        .join("\n"),
    ]
      .filter(Boolean)
      .join("\n");
    return body;
  }, [taxpayer, relinquished, properties]);

  function updateProperty(index: number, value: string) {
    setProperties((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  return (
    <section className="rounded-3xl border border-outline/40 bg-panel/50 p-6 shadow-lg">
      <p className="text-xs uppercase tracking-[0.35em] text-primary">
        Identification letter helper
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-heading">
        Draft a printable identification letter
      </h3>
      <div className="mt-4 space-y-3">
        <Field
          label="Taxpayer name"
          value={taxpayer}
          onChange={setTaxpayer}
          placeholder="Example: 1031 Exchange of San Diego LLC"
        />
        <Field
          label="Relinquished property"
          value={relinquished}
          onChange={setRelinquished}
          placeholder="Example: 123 Harbor Dr San Diego CA"
        />
        <div className="space-y-2">
          <p className="text-sm font-semibold text-heading">Replacement list</p>
          {properties.map((value, index) => (
            <input
              key={index}
              type="text"
              className="w-full rounded-xl border border-outline/60 bg-panel/30 px-4 py-3 text-sm text-heading focus:border-primary focus:outline-none"
              placeholder={`Property ${index + 1}`}
              value={value}
              onChange={(event) => updateProperty(index, event.target.value)}
            />
          ))}
          {properties.length < 6 ? (
            <button
              type="button"
              onClick={() => setProperties((prev) => [...prev, ""])}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Add another property
            </button>
          ) : null}
        </div>
        <div>
          <p className="text-sm font-semibold text-heading">Preview</p>
          <textarea
            readOnly
            value={letter}
            className="mt-1 w-full rounded-xl border border-outline/60 bg-panel/20 px-4 py-3 text-sm text-heading"
            rows={6}
          />
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function Field({ label, value, onChange, placeholder }: FieldProps) {
  return (
    <div>
      <label className="text-sm font-semibold text-heading">{label}</label>
      <input
        type="text"
        className="mt-1 w-full rounded-xl border border-outline/60 bg-panel/30 px-4 py-3 text-sm text-heading focus:border-primary focus:outline-none"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

