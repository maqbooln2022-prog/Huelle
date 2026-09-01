import { Hero } from "@/components/hero";
import { BestSellers } from "@/components/best-sellers";
import { CustomizerBanner } from "@/components/customizer-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <CustomizerBanner />
    </>
  );
}
