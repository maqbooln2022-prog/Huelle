"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function BrandStory() {
  return (
    <section className="bg-[#F3F1EC] py-20 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6 text-center lg:px-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Our Approach
        </p>
        <h2 className="mt-4 text-2xl font-light leading-relaxed tracking-tight sm:text-3xl">
          H&uuml;lle was born from a simple idea: a case should protect your
          phone without hiding what made you choose it in the first place.
          Every shape, seam, and shade is considered before it earns a place
          in the lineup.
        </h2>
        <Link
          href="/cases"
          className="mt-8 inline-block text-xs font-medium uppercase tracking-wide underline underline-offset-4 hover:opacity-70"
        >
          Explore the collection
        </Link>
      </motion.div>
    </section>
  );
}
