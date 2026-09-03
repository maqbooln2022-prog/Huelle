import type { Metadata } from "next";
import { CollectionGrid } from "@/components/collection-grid";
import { caseLines } from "@/lib/products";

export const metadata: Metadata = {
  title: "Phone Cases — Hülle",
  description:
    "Explore Hülle's phone case collections — Form, Duo, Air, and the Gen-Z Collection.",
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
          Phone Cases
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Discover H&uuml;lle&apos;s phone case collections, designed to
          complement your device with clarity and precision. From structured
          protection to featherlight shells, every case blends minimal
          aesthetics with dependable function.
        </p>
      </div>

      <CollectionGrid
        products={products}
        lines={caseLines.map((line) => ({ slug: line.slug, name: line.name }))}
      />
    </div>
  );
}
