import { Hero } from "@/components/hero";
import { ProductLineSection } from "@/components/product-line-section";
import { PromoBanner } from "@/components/promo-banner";
import { MaterialBand } from "@/components/material-band";
import { BrandStory } from "@/components/brand-story";
import { caseLines } from "@/lib/products";

export default function Home() {
  const [formCase, duoCase, airCase] = caseLines;

  return (
    <>
      <Hero />
      <ProductLineSection line={formCase} />
      <PromoBanner />
      <ProductLineSection line={duoCase} />
      <BrandStory />
      <MaterialBand />
      <ProductLineSection line={airCase} />
    </>
  );
}
