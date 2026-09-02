"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { devices } from "@/lib/products";

export function CollectionControls() {
  const [device, setDevice] = useState(devices[0]);
  const [sort, setSort] = useState("Featured");

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
      <div className="relative">
        <select
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          className="h-10 appearance-none rounded-full border border-border bg-surface pl-4 pr-9 text-xs font-medium tracking-wide"
        >
          {devices.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
          strokeWidth={1.5}
        />
      </div>

      <button
        type="button"
        className="flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 text-xs font-medium tracking-wide"
      >
        <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
        Filter
      </button>

      <div className="relative">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-10 appearance-none rounded-full border border-border bg-surface pl-4 pr-9 text-xs font-medium tracking-wide"
        >
          {["Featured", "Price: Low to High", "Price: High to Low", "Newest"].map(
            (option) => (
              <option key={option} value={option}>
                Sort by: {option}
              </option>
            )
          )}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}
