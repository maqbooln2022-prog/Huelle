"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const lines = [
  { name: "Form Case", image: "/images/packaging/form-closed-feathered.png" },
  { name: "Duo Case", image: "/images/packaging/duo-closed-feathered.png" },
  { name: "Air Case", image: "/images/packaging/air-closed-feathered.png" },
  {
    name: "Gen-Z Collection",
    image: "/images/packaging/genz-closed-feathered.png",
  },
];

export function PackagingShowcase() {
  return (
    <section className="bg-gradient-to-b from-[#F8F4EC] via-[#F3ECDD] to-[#F3F1EC] py-20 lg:py-28">
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
            A lift-lid box and a case seated on its own tray &mdash; no
            plastic wrap to fight through, nothing to throw away but paper.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto mt-14 aspect-[16/10] max-w-3xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,_rgba(232,145,45,0.14),_transparent_70%)]" />
          <Image
            src="/images/packaging/form-opened-feathered.png"
            alt="Form Case in Terracotta, seated on its tray inside an opened Hülle box"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="relative object-contain"
            priority={false}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-16"
        >
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Same box, every line
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {lines.map((line) => (
              <div key={line.name} className="flex flex-col items-center">
                <div className="relative aspect-[3/4] w-full max-w-[160px]">
                  <Image
                    src={line.image}
                    alt={`${line.name} packaging`}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 text-xs font-medium text-muted-foreground">
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
