"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const otherLines = [
  {
    name: "Duo Case",
    image: "/images/packaging/duo-closed.webp",
  },
  {
    name: "Air Case",
    image: "/images/packaging/air-closed.webp",
  },
  {
    name: "Gen-Z Collection",
    image: "/images/packaging/genz-closed.webp",
  },
];

export function PackagingShowcase() {
  return (
    <section className="bg-[#F3F1EC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Considered down to the box
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Every H&uuml;lle arrives like this
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A lift-lid box, a case seated face-down on its own tray, and a
            card that gets you started &mdash; no plastic wrap to fight
            through, nothing to throw away but paper.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white"
          >
            <Image
              src="/images/packaging/form-opened.webp"
              alt="Form Case in Terracotta, seated face-down on its tray inside an opened Hülle box"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain p-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white">
              <Image
                src="/images/packaging/form-closed.webp"
                alt="Closed Hülle box, Form Case in Terracotta"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-contain p-4"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white">
              <Image
                src="/images/packaging/form-card.webp"
                alt="Hülle getting-started and care card included in the box"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-contain p-4"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Same box, every line
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:gap-6">
            {otherLines.map((line) => (
              <div key={line.name} className="flex flex-col items-center gap-3">
                <div className="relative aspect-[3/4] w-24 overflow-hidden rounded-lg bg-white sm:w-32">
                  <Image
                    src={line.image}
                    alt={`${line.name} packaging`}
                    fill
                    sizes="128px"
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-xs font-medium text-muted-foreground">
                  {line.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
