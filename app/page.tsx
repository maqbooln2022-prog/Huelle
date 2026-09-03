import { Hero } from "@/components/hero";
import { ProductLineSection } from "@/components/product-line-section";
import { PromoBanner } from "@/components/promo-banner";
import { MaterialBand } from "@/components/material-band";
import { PackagingShowcase } from "@/components/packaging-showcase";
import { BrandStory } from "@/components/brand-story";
import { caseLines } from "@/lib/products";

export default function Home() {
  const [formCase, duoCase, airCase, genZ] = caseLines;

  return (
    <>
      <Hero />
      <ProductLineSection line={formCase} />
      <ProductLineSection line={duoCase} />
      <PromoBanner />
      <MaterialBand />
      <ProductLineSection line={airCase} />
      <ProductLineSection line={genZ} />
      <PackagingShowcase />
      <BrandStory />
    </>
  );
}
