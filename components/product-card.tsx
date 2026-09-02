"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { ProductBadges } from "@/components/product-badges";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-xl bg-surface transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F0EFEA]">
        <ProductBadges badges={product.badges} className="absolute left-3 top-3 z-10" />

        <Link
          href={`/cases/${product.slug}`}
          className="absolute inset-0 z-0"
          aria-label={`View ${product.name} in ${product.shade}`}
        />

        <Image
          src={product.image}
          alt={`${product.name} in ${product.shade}`}
          fill
          sizes="(min-width: 1024px) 25vw, 45vw"
          className="pointer-events-none object-cover"
        />

        <button
          type="button"
          onClick={() => addItem(product)}
          aria-label={`Add ${product.name} in ${product.shade} to cart`}
          className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Plus className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>

      <Link href={`/cases/${product.slug}`} className="flex items-center justify-between px-1 pt-4">
        <div>
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-xs text-muted-foreground">{product.shade}</p>
        </div>
        <p className="text-sm font-medium">{formatPrice(product.price)}</p>
      </Link>
    </motion.div>
  );
}
