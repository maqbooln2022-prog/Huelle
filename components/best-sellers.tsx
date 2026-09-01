import { bestSellers } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export function BestSellers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <h2 className="text-center text-2xl font-bold uppercase tracking-[0.15em] sm:text-3xl">
        Best sellers
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
