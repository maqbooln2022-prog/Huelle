"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/products";

const sortOptions = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
] as const;

export function CollectionGrid({
  products,
  lines,
}: {
  products: Product[];
  lines: { slug: string; name: string }[];
}) {
  const [lineFilter, setLineFilter] = useState("all");
  const [sort, setSort] = useState<(typeof sortOptions)[number]>("Featured");

  const visible = useMemo(() => {
    const filtered =
      lineFilter === "all"
        ? products
        : products.filter((p) => p.slug === lineFilter);
    if (sort === "Price: Low to High")
      return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low")
      return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [products, lineFilter, sort]);

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <div className="relative">
          <select
            value={lineFilter}
            onChange={(e) => setLineFilter(e.target.value)}
            aria-label="Filter by case line"
            className="h-10 appearance-none rounded-full border border-border bg-surface pl-4 pr-9 text-xs font-medium tracking-wide"
          >
            <option value="all">All cases</option>
            {lines.map((line) => (
              <option key={line.slug} value={line.slug}>
                {line.name}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
            strokeWidth={1.5}
          />
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as (typeof sortOptions)[number])
            }
            aria-label="Sort products"
            className="h-10 appearance-none rounded-full border border-border bg-surface pl-4 pr-9 text-xs font-medium tracking-wide"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                Sort by: {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
