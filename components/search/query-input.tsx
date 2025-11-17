'use client';

import { useEffect, useState } from "react";

interface QueryInputProps {
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  initialValue?: string;
}

export function QueryInput({
  label,
  placeholder,
  onChange,
  onSubmit,
  initialValue = "",
}: QueryInputProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <form
      className="flex flex-col gap-2 md:flex-row md:items-center"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(value);
      }}
    >
      <label className="text-sm font-semibold text-heading md:w-48">
        {label}
      </label>
      <div className="flex flex-1 items-center gap-2">
        <input
          type="search"
          value={value}
          onChange={(event) => {
            const nextValue = event.target.value;
            setValue(nextValue);
            onChange(nextValue);
          }}
          placeholder={placeholder}
          className="w-full rounded-xl border border-outline/60 bg-panel/40 px-4 py-3 text-sm text-heading placeholder:text-ink/50 focus:border-primary focus:outline-none"
        />
        <button
          type="button"
          onClick={() => {
            setValue("");
            onChange("");
            onSubmit?.("");
          }}
          className="rounded-full border border-outline px-4 py-2 text-xs font-semibold text-heading transition hover:bg-outline/40"
          aria-label="Clear search query"
        >
          Clear
        </button>
      </div>
    </form>
  );
}

