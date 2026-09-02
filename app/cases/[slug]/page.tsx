import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { FeatureHighlights } from "@/components/feature-highlights";
import { Accordion } from "@/components/accordion";
import { caseLines, getCaseLine, productFaqs } from "@/lib/products";

export function generateStaticParams() {
  return caseLines.map((line) => ({ slug: line.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const line = getCaseLine(slug);
  if (!line) return {};
  return {
    title: `${line.name} — Hülle`,
    description: line.tagline,
  };
}

export default async function CaseProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const line = getCaseLine(slug);
  if (!line) notFound();

  return (
    <>
      <ProductDetail line={line} />
      <FeatureHighlights
        title={`What sets the ${line.name} apart`}
        highlights={line.highlights}
      />
      <div className="mx-auto max-w-2xl px-6 py-16 lg:px-10 lg:py-20">
        <h2 className="text-center font-display text-3xl font-medium tracking-tight sm:text-4xl">
          FAQ
        </h2>
        <div className="mt-8">
          <Accordion items={productFaqs} />
        </div>
      </div>
    </>
  );
}
