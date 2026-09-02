"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function PromoBanner() {
  return (
    <section className="overflow-hidden bg-[#2B3444] text-[#F4F2ED]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center px-6 py-16 lg:px-14 lg:py-28"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#F4F2ED]/60">
            Now available
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Air Case is <span className="italic">here</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-[#F4F2ED]/70">
            Our thinnest shell yet, built for days when you want protection
            without ever noticing it&apos;s there. A 0.9mm profile that
            disappears in the hand.
          </p>
          <Link
            href="/cases/air-case"
            className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-full bg-[#F4F2ED] px-8 text-sm font-medium uppercase tracking-wide text-[#2B3444] transition-opacity hover:opacity-90"
          >
            Shop now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[320px] lg:min-h-[560px]"
        >
          <Image
            src="/images/lifestyle/promo-air.jpg"
            alt="Slim phone resting on a clean white desk beside a laptop"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B3444]/30 to-transparent lg:from-[#2B3444]/50" />
        </motion.div>
      </div>
    </section>
  );
}
