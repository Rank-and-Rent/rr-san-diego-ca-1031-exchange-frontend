'use client';

import { useMemo, useState } from "react";

interface BootInputs {
  relinquishedValue: string;
  replacementValue: string;
  cashReceived: string;
  oldMortgage: string;
  newMortgage: string;
  taxRate: string;
}

const initialState: BootInputs = {
  relinquishedValue: "",
  replacementValue: "",
  cashReceived: "",
  oldMortgage: "",
  newMortgage: "",
  taxRate: "20",
};

export function BootCalculator() {
  const [inputs, setInputs] = useState<BootInputs>(initialState);
  const [touched, setTouched] = useState<Record<keyof BootInputs, boolean>>({
    relinquishedValue: false,
    replacementValue: false,
    cashReceived: false,
    oldMortgage: false,
    newMortgage: false,
    taxRate: false,
  });

  const parsed = useMemo(() => {
    const parseValue = (value: string) => {
      const num = Number(value);
      return Number.isFinite(num) ? num : NaN;
    };

    return {
      relinquishedValue: parseValue(inputs.relinquishedValue),
      replacementValue: parseValue(inputs.replacementValue),
      cashReceived: parseValue(inputs.cashReceived),
      oldMortgage: parseValue(inputs.oldMortgage),
      newMortgage: parseValue(inputs.newMortgage),
      taxRate: parseValue(inputs.taxRate),
    };
  }, [inputs]);

  const errors: Partial<Record<keyof BootInputs, string>> = {};

  (Object.keys(parsed) as Array<keyof typeof parsed>).forEach((key) => {
    const value = parsed[key];
    if (Number.isNaN(value)) {
      errors[key] = "Enter a valid number.";
    } else if (value < 0 && key !== "newMortgage") {
      errors[key] = "Value cannot be negative.";
    }
  });

  const calculation = useMemo(() => {
    if (Object.keys(errors).length > 0) {
      return null;
    }

    const cashBoot = Math.max(0, parsed.cashReceived);
    const mortgageBoot = Math.max(0, parsed.oldMortgage - parsed.newMortgage);
    const totalBoot = cashBoot + mortgageBoot;
    const estimatedTax =
      totalBoot * Math.max(0, parsed.taxRate) * 0.01;
    const replacementShortfall = Math.max(
      0,
      parsed.relinquishedValue - parsed.replacementValue,
    );

    const fullyDeferred =
      totalBoot === 0 &&
      replacementShortfall === 0 &&
      parsed.newMortgage >= parsed.oldMortgage;

    return {
      cashBoot,
      mortgageBoot,
      totalBoot,
      estimatedTax,
      replacementShortfall,
      fullyDeferred,
    };
  }, [errors, parsed]);

  const handleChange = (field: keyof BootInputs) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputs((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleBlur = (field: keyof BootInputs) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <section className="rounded-2xl border border-outline/40 bg-panel/50 p-6">
      <form className="grid gap-6 md:grid-cols-2">
        {([
          {
            label: "Relinquished property value",
            field: "relinquishedValue",
            placeholder: "1,850,000",
            helper: "Total contract price of the sold asset.",
          },
          {
            label: "Replacement property value",
            field: "replacementValue",
            placeholder: "2,050,000",
            helper: "Purchase price of the selected replacement.",
          },
          {
            label: "Cash received at closing",
            field: "cashReceived",
            placeholder: "25,000",
            helper: "Any cash that left the exchange (boot).",
          },
          {
            label: "Old mortgage paid off",
            field: "oldMortgage",
            placeholder: "800,000",
            helper: "Debt satisfied on the relinquished asset.",
          },
          {
            label: "New mortgage placed",
            field: "newMortgage",
            placeholder: "750,000",
            helper: "Debt on the replacement property.",
          },
          {
            label: "Illustrative tax rate (%)",
            field: "taxRate",
            placeholder: "20",
            helper: "Change to match your combined federal/state rate.",
          },
        ] as const).map((inputConfig) => {
          const field = inputConfig.field as keyof BootInputs;
          const hasError = touched[field] && errors[field];
          return (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-semibold text-heading"
              >
                {inputConfig.label}
              </label>
              <input
                id={field}
                inputMode="decimal"
                type="number"
                min="0"
                value={inputs[field]}
                onChange={handleChange(field)}
                onBlur={handleBlur(field)}
                placeholder={inputConfig.placeholder}
                className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-heading placeholder:text-ink/40 bg-panel/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary ${
                  hasError ? "border-red-400" : "border-outline/60"
                }`}
              />
              <p className="mt-1 text-xs text-ink/70">
                {inputConfig.helper}
              </p>
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
        <div className="rounded-2xl border border-outline/40 bg-panel/60 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Results
          </p>
          {calculation ? (
            <dl className="mt-4 space-y-3 text-base">
              <div className="flex items-center justify-between">
                <dt className="text-ink/80">Cash boot</dt>
                <dd className="font-semibold text-heading">
                  ${calculation.cashBoot.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink/80">Mortgage boot</dt>
                <dd className="font-semibold text-heading">
                  ${calculation.mortgageBoot.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-outline/30 pt-3">
                <dt className="text-heading">Total boot exposure</dt>
                <dd className="text-2xl font-bold text-primary">
                  ${calculation.totalBoot.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-ink/70">Illustrative tax on boot</dt>
                <dd className="font-semibold text-heading">
                  ${calculation.estimatedTax.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-ink/70">Replacement shortfall</dt>
                <dd className="font-semibold text-heading">
                  ${calculation.replacementShortfall.toLocaleString()}
                </dd>
              </div>
              <div className="rounded-xl border border-outline/40 bg-panel/40 p-3 text-sm">
                <p className="font-semibold text-heading">
                  {calculation.fullyDeferred
                    ? "Path to full deferral looks achievable."
                    : "Additional reinvestment or debt may be required."}
                </p>
              </div>
            </dl>
          ) : (
            <p className="mt-4 text-sm text-ink/70">
              Provide valid inputs to view the boot calculation summary.
            </p>
          )}
        </div>

        <div className="space-y-4 rounded-2xl border border-outline/40 bg-panel/60 p-6 text-sm">
          <h3 className="text-xl font-semibold text-heading">
            How we calculate boot
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-ink/80">
            <li>
              <strong className="text-heading">Cash boot:</strong> Any cash that leaves the exchange.
            </li>
            <li>
              <strong className="text-heading">Mortgage boot:</strong> Debt relief when the new loan is
              smaller than the retired loan.
            </li>
            <li>
              <strong className="text-heading">Replacement shortfall:</strong> If the new property costs
              less than the relinquished asset, boot may occur.
            </li>
            <li>
              <strong className="text-heading">Estimated tax:</strong> Calculated using your illustrative
              tax rate. Actual rates depend on federal and state exposure.
            </li>
          </ul>
          <p className="text-xs text-ink/60">
            Assumes no other non-like-kind property is received. Change the tax
            rate to reflect your CPA guidance.
          </p>
        </div>
      </div>
    </section>
  );
}


