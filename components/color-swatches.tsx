"use client";

import { cn } from "@/lib/utils";
import type { ColorOption } from "@/lib/products";

export function ColorSwatches({
  colors,
  selected,
  onSelect,
}: {
  colors: ColorOption[];
  selected: ColorOption;
  onSelect: (color: ColorOption) => void;
}) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">
        Color <span className="font-medium text-foreground">{selected.name}</span>
      </p>
      <div className="mt-3 flex flex-wrap gap-2.5">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => onSelect(color)}
            aria-label={color.name}
            aria-pressed={color.name === selected.name}
            className={cn(
              "h-8 w-8 rounded-full border-2 transition-transform hover:scale-105",
              color.name === selected.name
                ? "border-foreground"
                : "border-transparent ring-1 ring-border"
            )}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}
