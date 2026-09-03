import type { Metadata } from "next";
import Link from "next/link";
import { CollectionGrid } from "@/components/collection-grid";
import { caseLines } from "@/lib/products";

export const metadata: Metadata = {
  title: "iPhone Cases — Hülle",
  description:
    "Explore Hülle's iPhone case collections — Form, Duo, Air, and the Gen-Z Collection.",
};

export default function CasesPage() {
  const products = caseLines.flatMap((line) =>
    line.colors.map((color) => ({
      id: `${line.slug}-${color.name.toLowerCase().replace(/\s+/g, "-")}`,
      name: line.name,
      price: line.price,
      shade: color.name,
      swatch: color.hex,
      slug: line.slug,
      image: color.image ?? line.image,
      badges: line.badges,
    }))
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
          iPhone Cases
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Discover H&uuml;lle&apos;s iPhone case collections, designed to
          complement your device with clarity and precision. From structured
          protection to featherlight shells, every case blends minimal
          aesthetics with dependable function.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          Have a Samsung?{" "}
          <Link
            href="/cases/samsung"
            className="font-medium underline underline-offset-4 hover:opacity-70"
          >
            Samsung cases are coming soon
          </Link>
          .
        </p>
      </div>

      <CollectionGrid
        products={products}
        lines={caseLines.map((line) => ({ slug: line.slug, name: line.name }))}
      />
    </div>
  );
}
