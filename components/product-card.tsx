"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { PhoneMockup } from "@/components/phone-mockup";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-xl bg-surface transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[#F0EFEA] p-6">
        <PhoneMockup shade={product.swatch} floatCard={false} className="w-32" />

        <button
          type="button"
          onClick={() => addItem(product)}
          aria-label={`Add ${product.name} in ${product.shade} to cart`}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Plus className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>

      <div className="flex items-center justify-between px-1 pt-4">
        <div>
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-xs text-muted-foreground">{product.shade}</p>
        </div>
        <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
}
