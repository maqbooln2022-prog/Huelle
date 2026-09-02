"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/phone-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#161613] text-[#F4F2ED]">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-[#F4F2ED]/60"
        >
          Autumn / Winter Collection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Meet Form Case
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-5 max-w-md text-base font-light text-[#F4F2ED]/70"
        >
          Structured protection with a signature silhouette, in six new
          season shades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8"
        >
          <Link
            href="/cases/form-case"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#F4F2ED] px-8 text-sm font-medium uppercase tracking-wide text-[#161613] transition-opacity hover:opacity-90"
          >
            Shop now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="mt-14"
        >
          <PhoneMockup shade="#79826F" className="w-56 sm:w-64" floatCard={false} />
        </motion.div>
      </div>
    </section>
  );
}
