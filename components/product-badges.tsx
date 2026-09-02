import type { Badge } from "@/lib/products";
import { cn } from "@/lib/utils";

const labels: Record<Badge, string> = {
  new: "New",
  limited: "Limited Edition",
  magsafe: "MagSafe",
};

export function ProductBadges({
  badges,
  className,
}: {
  badges: Badge[];
  className?: string;
}) {
  if (!badges.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {badges.map((badge) => (
        <span
          key={badge}
          className={cn(
            "rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider",
            badge === "new"
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-surface/90 text-foreground backdrop-blur-sm"
          )}
        >
          {labels[badge]}
        </span>
      ))}
    </div>
  );
}
