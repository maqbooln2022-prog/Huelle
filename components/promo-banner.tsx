"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/phone-mockup";

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-[#2B3444] text-[#F4F2ED]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 lg:flex-row lg:justify-between lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 max-w-md text-center lg:order-1 lg:text-left"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#F4F2ED]/60">
            Now available
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Air Case is here
          </h2>
          <p className="mt-4 text-sm font-light text-[#F4F2ED]/70">
            Our thinnest shell yet, built for days when you want protection
            without ever noticing it&apos;s there.
          </p>
          <Link
            href="/cases/air-case"
            className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-[#F4F2ED] px-8 text-sm font-medium uppercase tracking-wide text-[#2B3444] transition-opacity hover:opacity-90"
          >
            Shop now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <PhoneMockup shade="#1B1B1B" className="w-52 sm:w-60" floatCard={false} />
        </motion.div>
      </div>
    </section>
  );
}
