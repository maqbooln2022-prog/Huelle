import { RotateCcw, Truck, ShieldCheck } from "lucide-react";

const items = [
  { icon: RotateCcw, label: "100-day return policy" },
  { icon: Truck, label: "Free shipping over ₹999" },
  { icon: ShieldCheck, label: "1-year warranty on every case" },
];

export function TrustBadges() {
  return (
    <ul className="flex flex-col gap-3 rounded-lg bg-card p-4">
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-3 text-sm">
          <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          {label}
        </li>
      ))}
    </ul>
  );
}
