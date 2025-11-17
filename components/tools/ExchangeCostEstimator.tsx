'use client';

import { useMemo, useState } from "react";

interface CostInputs {
  propertyValue: string;
  qiFeePercent: string;
  escrowFee: string;
  titleRate: string;
  recordingFees: string;
}

const initialInputs: CostInputs = {
  propertyValue: "",
  qiFeePercent: "0.5",
  escrowFee: "",
  titleRate: "0.45",
  recordingFees: "350",
};

export function ExchangeCostEstimator() {
  const [inputs, setInputs] = useState<CostInputs>(initialInputs);
  const [touched, setTouched] = useState<Record<keyof CostInputs, boolean>>({
    propertyValue: false,
    qiFeePercent: false,
    escrowFee: false,
    titleRate: false,
    recordingFees: false,
  });

  const parsed = useMemo(() => {
    const parse = (value: string) => {
      const num = Number(value);
      return Number.isFinite(num) ? num : NaN;
    };

    return {
      propertyValue: parse(inputs.propertyValue),
      qiFeePercent: parse(inputs.qiFeePercent),
      escrowFee: parse(inputs.escrowFee),
      titleRate: parse(inputs.titleRate),
      recordingFees: parse(inputs.recordingFees),
    };
  }, [inputs]);

  const errors: Partial<Record<keyof CostInputs, string>> = {};
  (Object.keys(parsed) as Array<keyof typeof parsed>).forEach((key) => {
    const value = parsed[key];
    if (Number.isNaN(value)) {
      errors[key] = "Enter a valid number.";
    } else if (value < 0) {
      errors[key] = "Value cannot be negative.";
    }
  });

  const results = useMemo(() => {
    if (Object.keys(errors).length > 0) {
      return null;
    }

    const qiFee =
      (parsed.propertyValue * Math.max(0, parsed.qiFeePercent)) / 100;
    const titleInsurance =
      (parsed.propertyValue * Math.max(0, parsed.titleRate)) / 100;
    const escrow = parsed.escrowFee;
    const recording = parsed.recordingFees;
    const total = qiFee + titleInsurance + escrow + recording;

    return {
      qiFee,
      titleInsurance,
      escrow,
      recording,
      total,
    };
  }, [errors, parsed]);

  const handleChange = (field: keyof CostInputs) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputs((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleBlur = (field: keyof CostInputs) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <section className="rounded-2xl border border-outline/40 bg-panel/50 p-6">
      <form className="grid gap-6 md:grid-cols-2">
        {([
          {
            label: "Target property value",
            field: "propertyValue",
            placeholder: "2,100,000",
            helper: "Purchase price of the replacement property.",
          },
          {
            label: "QI fee (%)",
            field: "qiFeePercent",
            placeholder: "0.50",
            helper: "Typical range is 0.35% to 0.75% depending on complexity.",
          },
          {
            label: "Escrow fee ($)",
            field: "escrowFee",
            placeholder: "4,500",
            helper: "Enter the quoted escrow/closing settlement charges.",
          },
          {
            label: "Title insurance rate (%)",
            field: "titleRate",
            placeholder: "0.45",
            helper: "Enter the promulgated title premium rate.",
          },
          {
            label: "Recording fees",
            field: "recordingFees",
            placeholder: "350",
            helper: "Estimate recording fees based on your county. Enter lump sum.",
          },
        ] as const).map((config) => {
          const field = config.field as keyof CostInputs;
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
        <div className="rounded-2xl border border-outline/40 bg-panel/60 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Cost summary
          </p>
          {results ? (
            <dl className="mt-4 space-y-3 text-base">
              <div className="flex items-center justify-between">
                <dt className="text-ink/80">Qualified intermediary fee</dt>
                <dd className="font-semibold text-heading">
                  ${results.qiFee.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink/80">Title insurance premium</dt>
                <dd className="font-semibold text-heading">
                  ${results.titleInsurance.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink/80">Escrow / settlement</dt>
                <dd className="font-semibold text-heading">
                  ${results.escrow.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink/80">Recording fees</dt>
                <dd className="font-semibold text-heading">
                  ${results.recording.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-outline/30 pt-3 text-lg">
                <dt className="text-heading">Total projected exchange costs</dt>
                <dd className="text-2xl font-bold text-primary">
                  ${results.total.toLocaleString()}
                </dd>
              </div>
            </dl>
          ) : (
            <p className="mt-4 text-sm text-ink/70">
              Enter valid figures to estimate your exchange costs.
            </p>
          )}
        </div>

        <div className="space-y-4 rounded-2xl border border-outline/40 bg-panel/60 p-6 text-sm">
          <h3 className="text-xl font-semibold text-heading">
            Exchange cost notes
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-ink/80">
            <li>Recording fees vary by county and document type.</li>
            <li>
              Title insurance rates are typically promulgated; verify your bracket with
              the title company.
            </li>
            <li>
              QI fees vary by transaction size, complexity, and security
              requirements.
            </li>
            <li>
              Escrow fees may include settlement charges and wire transfer fees.
            </li>
          </ul>
          <p className="text-xs text-ink/60">
            Update the percentages and flat fees with quotes from your providers
            for improved accuracy.
          </p>
        </div>
      </div>
    </section>
  );
}


