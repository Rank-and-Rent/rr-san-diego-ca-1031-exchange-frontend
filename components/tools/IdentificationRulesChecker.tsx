'use client';

import { useMemo, useState } from "react";

interface RuleInputs {
  propertyCount: string;
  totalIdentifiedValue: string;
  relinquishedValue: string;
  expectedAcquisitionValue: string;
}

const initialInputs: RuleInputs = {
  propertyCount: "",
  totalIdentifiedValue: "",
  relinquishedValue: "",
  expectedAcquisitionValue: "",
};

export function IdentificationRulesChecker() {
  const [inputs, setInputs] = useState<RuleInputs>(initialInputs);
  const [touched, setTouched] = useState<Record<keyof RuleInputs, boolean>>({
    propertyCount: false,
    totalIdentifiedValue: false,
    relinquishedValue: false,
    expectedAcquisitionValue: false,
  });

  const parsed = useMemo(() => {
    const parse = (value: string) => {
      const num = Number(value);
      return Number.isFinite(num) ? num : NaN;
    };

    return {
      propertyCount: parse(inputs.propertyCount),
      totalIdentifiedValue: parse(inputs.totalIdentifiedValue),
      relinquishedValue: parse(inputs.relinquishedValue),
      expectedAcquisitionValue: parse(inputs.expectedAcquisitionValue || "0"),
    };
  }, [inputs]);

  const errors: Partial<Record<keyof RuleInputs, string>> = {};

  (Object.keys(parsed) as Array<keyof typeof parsed>).forEach((key) => {
    const value = parsed[key];
    if (Number.isNaN(value)) {
      errors[key] = "Enter a valid number.";
    } else if (value < 0) {
      errors[key] = "Value cannot be negative.";
    }
  });

  const evaluation = useMemo(() => {
    if (Object.keys(errors).length > 0) {
      return null;
    }

    const threePropertyRule = parsed.propertyCount <= 3;
    const twoHundredPercentRule =
      parsed.totalIdentifiedValue <= parsed.relinquishedValue * 2;
    const ninetyFivePercentRule =
      parsed.expectedAcquisitionValue > 0
        ? parsed.expectedAcquisitionValue >= parsed.totalIdentifiedValue * 0.95
        : parsed.totalIdentifiedValue >= parsed.relinquishedValue * 0.95;

    return {
      threePropertyRule,
      twoHundredPercentRule,
      ninetyFivePercentRule,
    };
  }, [errors, parsed]);

  const handleChange = (field: keyof RuleInputs) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputs((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleBlur = (field: keyof RuleInputs) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const statusBadge = (isValid: boolean) =>
    isValid ? (
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        Pass
      </span>
    ) : (
      <span className="rounded-full bg-red-400/20 px-3 py-1 text-xs font-semibold text-red-400">
        Review
      </span>
    );

  return (
    <section className="rounded-2xl border border-outline/40 bg-panel/50 p-6">
      <form className="grid gap-6 md:grid-cols-2">
        {([
          {
            label: "Number of properties identified",
            field: "propertyCount",
            placeholder: "4",
            helper: "Count every property described in your identification letter.",
          },
          {
            label: "Total value of identified properties",
            field: "totalIdentifiedValue",
            placeholder: "5,600,000",
            helper: "Sum of the list prices for all identified assets.",
          },
          {
            label: "Relinquished property value",
            field: "relinquishedValue",
            placeholder: "2,800,000",
            helper: "Contract price for the relinquished property.",
          },
          {
            label: "Value you expect to acquire",
            field: "expectedAcquisitionValue",
            placeholder: "5,300,000",
            helper:
              "Optional: value of the properties you plan to close. Helps evaluate the 95% rule.",
          },
        ] as const).map((config) => {
          const field = config.field as keyof RuleInputs;
          const hasError = touched[field] && errors[field];
          return (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-semibold text-heading"
              >
                {config.label}
              </label>
              <input
                id={field}
                type="number"
                min="0"
                value={inputs[field]}
                onChange={handleChange(field)}
                onBlur={handleBlur(field)}
                placeholder={config.placeholder}
                className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-heading placeholder:text-ink/40 bg-panel/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary ${
                  hasError ? "border-red-400" : "border-outline/60"
                }`}
              />
              <p className="mt-1 text-xs text-ink/70">{config.helper}</p>
              {hasError ? (
                <p className="mt-1 text-xs text-red-400">
                  {errors[field]}
                </p>
              ) : null}
            </div>
          );
        })}
      </form>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-outline/40 bg-panel/60 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Rule status
          </p>
          {evaluation ? (
            <ul className="space-y-4">
              <li className="rounded-xl border border-outline/40 bg-panel/40 p-4">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-heading">Three-property rule</span>
                  {statusBadge(evaluation.threePropertyRule)}
                </div>
                <p className="mt-2 text-sm text-ink/70">
                  Identify up to three properties regardless of value.
                </p>
              </li>
              <li className="rounded-xl border border-outline/40 bg-panel/40 p-4">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-heading">200 percent rule</span>
                  {statusBadge(evaluation.twoHundredPercentRule)}
                </div>
                <p className="mt-2 text-sm text-ink/70">
                  Total identified value must not exceed 200% of the relinquished property value.
                </p>
              </li>
              <li className="rounded-xl border border-outline/40 bg-panel/40 p-4">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-heading">95 percent rule</span>
                  {statusBadge(evaluation.ninetyFivePercentRule)}
                </div>
                <p className="mt-2 text-sm text-ink/70">
                  Close on at least 95% of the total identified value if you exceed other limits.
                </p>
              </li>
            </ul>
          ) : (
            <p className="mt-4 text-sm text-ink/70">
              Enter valid values to assess each identification rule.
            </p>
          )}
        </div>

        <div className="space-y-4 rounded-2xl border border-outline/40 bg-panel/60 p-6 text-sm">
          <h3 className="text-xl font-semibold text-heading">
            Interpretation tips
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-ink/80">
            <li>
              Use the three-property rule when you only need a short list of high-quality replacements.
            </li>
            <li>
              The 200% rule helps when you need more than three options, but cap the total list at twice the relinquished value.
            </li>
            <li>
              The 95% rule is a backstop—plan to close on nearly everything you identify.
            </li>
            <li>
              Update the expected acquisition value once offers are accepted to keep the 95% test accurate.
            </li>
          </ul>
          <p className="text-xs text-ink/60">
            Always confirm the final identification letter language with your qualified intermediary.
          </p>
        </div>
      </div>
    </section>
  );
}


