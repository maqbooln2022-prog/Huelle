"use client";

import { ChevronDown } from "lucide-react";
import type { DeviceOption } from "@/lib/products";

export function DeviceSelect({
  devices,
  value,
  onChange,
}: {
  devices: DeviceOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full appearance-none rounded-lg border border-border bg-surface px-4 pr-10 text-sm font-medium"
      >
        {devices.map((device) => (
          <option
            key={device.name}
            value={device.name}
            disabled={device.comingSoon}
          >
            {device.name}
            {device.comingSoon ? " — Coming soon" : ""}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
        strokeWidth={1.5}
      />
    </div>
  );
}
