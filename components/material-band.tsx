"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MaterialBand() {
  return (
    <section className="relative overflow-hidden text-[#F4F2ED]">
      <Image
        src="/images/lifestyle/weave-band.webp"
        alt="Close-up of navy woven aramid fibre"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#101318]/55" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#F4F2ED]/60">
          The material
        </p>
        <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Woven aramid fibre
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-[#F4F2ED]/75">
          The strength of carbon at a fraction of the weight — woven into a
          0.9mm shell that keeps your phone feeling like your phone.
        </p>
      </motion.div>
    </section>
  );
}
