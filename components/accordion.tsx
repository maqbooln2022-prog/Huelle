import { Plus } from "lucide-react";

export function Accordion({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="divide-y divide-border border-t border-border">
      {items.map((item) => (
        <details key={item.title} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
            {item.title}
            <Plus
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
              strokeWidth={1.5}
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {item.body}
          </p>
        </details>
      ))}
    </div>
  );
}
