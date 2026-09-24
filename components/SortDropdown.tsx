"use client";

import { ChevronDown } from "lucide-react";
import { SortKey } from "@/lib/types";

const options: { key: SortKey; label: string }[] = [
  { key: "duration", label: "Duration" },
  { key: "caloriesBurned", label: "Calories" },
  { key: "rating", label: "Rating" },
];

export default function SortDropdown({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (key: SortKey) => void;
}) {
  return (
    <label className="relative inline-flex items-center gap-2 text-sm text-mute">
      <span className="font-display text-xs font-semibold uppercase tracking-wider">
        Sort By
      </span>
      <span className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortKey)}
          className="appearance-none rounded-card border border-hairline bg-surface py-2 pl-3 pr-8 font-display text-xs font-semibold uppercase tracking-wider text-bone outline-none transition focus:border-accent"
        >
          {options.map((opt) => (
            <option key={opt.key} value={opt.key}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-mute" />
      </span>
    </label>
  );
}
