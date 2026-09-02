import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { CollectionControls } from "@/components/collection-controls";
import { caseLines } from "@/lib/products";

export const metadata: Metadata = {
  title: "Phone Cases — Hülle",
  description:
    "Explore Hülle's phone case collections — Form, Air, and Clear — designed with intention.",
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
      image: line.image,
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

      <CollectionControls />

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
