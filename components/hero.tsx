"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="overflow-hidden bg-[#F3F1EC] text-[#161613]">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:min-h-[88vh] lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.35em] text-[#161613]/55"
          >
            Autumn / Winter Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-xl font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl"
          >
            Protection,
            <br />
            <span className="italic text-[#161613]/75">
              quietly considered.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-md text-base font-light leading-relaxed text-[#161613]/65"
          >
            Meet Form Case — structured protection with a signature
            silhouette, in six new season shades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/cases/form-case"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#161613] px-8 text-sm font-medium uppercase tracking-wide text-[#F4F2ED] transition-opacity hover:opacity-90"
            >
              Shop Form Case
            </Link>
            <Link
              href="/cases"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#161613]/30 px-8 text-sm font-medium uppercase tracking-wide text-[#161613] transition-colors hover:border-[#161613] hover:bg-[#161613]/5"
            >
              Explore all
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-x-10 gap-y-3 text-xs uppercase tracking-[0.18em] text-[#161613]/50"
          >
            <span>4.8★ from 1,000+ reviews</span>
            <span>Drop-tested to 1.8m</span>
            <span>100-day returns</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-full"
        >
          <Image
            src="/images/lifestyle/hero-studio.jpg"
            alt="A vivid blue phone presented in its open box on a bright studio table"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_62%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
