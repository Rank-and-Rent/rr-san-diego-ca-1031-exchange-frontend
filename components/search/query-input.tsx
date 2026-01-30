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
      <label className="text-sm font-semibold text-[#0F2A3D] md:w-48">
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
          className="w-full rounded-lg border border-[#0F2A3D]/20 bg-white px-4 py-3 text-sm text-[#0F2A3D] placeholder:text-[#0F2A3D]/50 focus:border-[#0F2A3D] focus:outline-none"
        />
        <button
          type="button"
          onClick={() => {
            setValue("");
            onChange("");
            onSubmit?.("");
          }}
          className="rounded-full border border-[#0F2A3D]/20 px-4 py-2 text-xs font-semibold text-[#0F2A3D] transition hover:bg-[#0F2A3D] hover:text-white"
          aria-label="Clear search query"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
