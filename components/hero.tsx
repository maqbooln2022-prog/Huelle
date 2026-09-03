"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    key: "form",
    eyebrow: "Your style. Your case.",
    title: ["Function,", "meet Form."],
    sub: "The Form Case — ridged for grip, MagSafe built in, drop-tested to 1.8 metres. Nine shades, ₹2,499.",
    ctaHref: "/cases/form-case",
    ctaLabel: "Shop Form Case",
    image: "/images/lifestyle/form-trio-v2.webp",
    alt: "Form Case in Oxblood on an orange iPhone, Forest on navy, and Slate Blue on white",
  },
  {
    key: "air",
    eyebrow: "New — woven aramid fibre",
    title: ["Air Case.", "0.9mm thin."],
    sub: "A woven aramid shell that disappears in the hand. MagSafe built in, five weave shades — ₹999.",
    ctaHref: "/cases/air-case",
    ctaLabel: "Shop Air Case",
    image: "/images/lifestyle/air-trio.webp",
    alt: "Air Case in sage, graphite, and navy aramid weave",
  },
  {
    key: "gen-z",
    eyebrow: "The Gen-Z Collection",
    title: ["Loud,", "on purpose."],
    sub: "Gradients and confetti on the ridged shell — six prints, ₹2,499.",
    ctaHref: "/cases/gen-z",
    ctaLabel: "Shop Gen-Z",
    image: "/images/lifestyle/genz-trio.webp",
    alt: "Gen-Z collection cases in Sunset Fade, Ocean Fade, and Neon Dusk prints",
  },
];

const ROTATE_MS = 7000;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      ROTATE_MS
    );
    return () => clearInterval(t);
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#d8d7d5] via-[#d4d3d1] to-[#c9c8c5] text-[#161613]">
      <div className="grid">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.key}
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            aria-hidden={i !== active}
            className={`col-start-1 row-start-1 ${
              i === active ? "" : "pointer-events-none"
            }`}
          >
            <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-center lg:min-h-[88vh] lg:grid-cols-[1fr_1.5fr]">
              <div className="flex flex-col justify-center px-6 pt-16 pb-4 lg:px-14 lg:py-24">
                <p className="text-xs uppercase tracking-[0.35em] text-[#161613]/60">
                  {slide.eyebrow}
                </p>
                <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  {slide.title[0]}
                  <br />
                  {slide.title[1]}
                </h1>
                <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-[#161613]/70">
                  {slide.sub}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.ctaHref}
                    tabIndex={i === active ? 0 : -1}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#161613] px-8 text-sm font-medium uppercase tracking-wide text-[#F4F2ED] transition-opacity hover:opacity-90"
                  >
                    {slide.ctaLabel}
                  </Link>
                  <Link
                    href="/cases"
                    tabIndex={i === active ? 0 : -1}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#161613]/35 px-8 text-sm font-medium uppercase tracking-wide text-[#161613] transition-colors hover:border-[#161613] hover:bg-[#161613]/5"
                  >
                    Explore all
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[560px]">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-6 left-6 flex items-center gap-2.5 lg:left-14">
        {slides.map((slide, i) => (
          <button
            key={slide.key}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}: ${slide.ctaLabel}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === active
                ? "w-6 bg-[#161613]"
                : "w-2 bg-[#161613]/30 hover:bg-[#161613]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
