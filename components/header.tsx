"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/shop"
          className="text-xs font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-60"
        >
          Shop
        </Link>

        <Link
          href="/"
          className="text-xl font-bold tracking-[0.15em] uppercase absolute left-1/2 -translate-x-1/2"
        >
          H&uuml;lle
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/customize"
            className="hidden sm:inline text-xs font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-60"
          >
            Customize
          </Link>

          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-card cursor-pointer"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-0.5 -right-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background"
              >
                {count}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
