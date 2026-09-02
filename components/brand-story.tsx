"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function BrandStory() {
  return (
    <section className="overflow-hidden bg-[#F3F1EC] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/cases/air/air-sage-back.webp"
              alt="Air Case in sage woven aramid on a studio backdrop"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-44 overflow-hidden rounded-xl border-4 border-[#F3F1EC] shadow-xl sm:block lg:-right-8 lg:w-56">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/lifestyle/weave-macro.webp"
                alt="Macro detail of the taupe aramid weave texture"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="pb-8 sm:pb-0"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Our Approach
          </p>
          <h2 className="mt-5 font-display text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
            A case should protect your phone{" "}
            <span className="italic">without hiding</span> what made you
            choose it.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Hülle — German for &ldquo;shell&rdquo; — was born from that
            simple idea. Every shape, seam, and shade is considered before
            it earns a place in the lineup: soft-touch finishes, bio-based
            shells, and edges that follow the device instead of fighting it.
          </p>
          <Link
            href="/cases"
            className="mt-8 inline-block text-xs font-medium uppercase tracking-wide underline underline-offset-4 hover:opacity-70"
          >
            Explore the collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
