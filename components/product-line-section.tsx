import Link from "next/link";
import type { CaseLine } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export function ProductLineSection({ line }: { line: CaseLine }) {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {line.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {line.tagline}
            </p>
          </div>
          <Link
            href={`/cases/${line.slug}`}
            className="hidden shrink-0 text-xs font-medium uppercase tracking-wide underline underline-offset-4 hover:opacity-70 sm:inline"
          >
            Shop now
          </Link>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0">
          {line.colors.map((color) => (
            <div
              key={color.name}
              className="w-[70%] shrink-0 snap-start sm:w-[45%] lg:w-auto"
            >
              <ProductCard
                product={{
                  id: `${line.slug}-${color.name.toLowerCase().replace(/\s+/g, "-")}`,
                  name: line.name,
                  price: line.price,
                  shade: color.name,
                  swatch: color.hex,
                  slug: line.slug,
                  badges: line.badges,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
