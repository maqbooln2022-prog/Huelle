"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#161613] text-[#F4F2ED]">
      <Image
        src="/images/lifestyle/form-lineup.webp"
        alt="Form Case lineup in five shades — mauve, black, sage, beige, and navy"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#161613]/85 via-[#161613]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#161613]/75 to-transparent" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.35em] text-[#F4F2ED]/70"
        >
          New for Autumn / Winter
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Form Case.
          <br />
          Five new shades.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-md text-base font-light leading-relaxed text-[#F4F2ED]/80"
        >
          Carbon-weave texture. MagSafe built in. Drop-tested to 1.8
          metres. ₹1,650.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/cases/form-case"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#F4F2ED] px-8 text-sm font-medium uppercase tracking-wide text-[#161613] transition-opacity hover:opacity-90"
          >
            Shop Form Case
          </Link>
          <Link
            href="/cases"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#F4F2ED]/40 px-8 text-sm font-medium uppercase tracking-wide text-[#F4F2ED] transition-colors hover:border-[#F4F2ED] hover:bg-[#F4F2ED]/10"
          >
            Explore all
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
