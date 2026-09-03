"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const packages = [
  {
    key: "genz",
    name: "Gen-Z Collection",
    shade: "Confetti Black",
    closed: "/images/packaging/genz-closed-feathered.png",
    opened: "/images/packaging/genz-opened-feathered.png",
    card: "/images/packaging/genz-card-feathered.png",
  },
  {
    key: "form",
    name: "Form Case",
    shade: "Terracotta",
    closed: "/images/packaging/form-closed-feathered.png",
    opened: "/images/packaging/form-opened-feathered.png",
    card: "/images/packaging/form-card-feathered.png",
  },
  {
    key: "duo",
    name: "Duo Case",
    shade: "Olive",
    closed: "/images/packaging/duo-closed-feathered.png",
    opened: "/images/packaging/duo-opened-feathered.png",
    card: "/images/packaging/duo-card-feathered.png",
  },
  {
    key: "air",
    name: "Air Case",
    shade: "Sage Green",
    closed: "/images/packaging/air-closed-feathered.png",
    opened: "/images/packaging/air-opened-feathered.png",
    card: "/images/packaging/air-card-feathered.png",
  },
] as const;

export function PackagingShowcase() {
  const [activeKey, setActiveKey] = useState<(typeof packages)[number]["key"]>(
    "genz"
  );
  const active = packages.find((p) => p.key === activeKey) ?? packages[0];
  const others = packages.filter((p) => p.key !== activeKey);

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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-14"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="grid grid-cols-[1fr_1.3fr_1fr] items-center gap-2 sm:gap-6">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={active.closed}
                    alt={`${active.name} in ${active.shade}, closed box`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 30vw"
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={active.opened}
                    alt={`${active.name} in ${active.shade}, opened box with case on tray`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 40vw"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={active.card}
                    alt={`${active.name} getting-started and care card`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 30vw"
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-sm font-medium text-foreground">
                {active.name}
                <span className="font-normal text-muted-foreground">
                  {" "}
                  &middot; {active.shade}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-16"
        >
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Same box, every line
          </p>
          <div className="mt-8 flex justify-center gap-8 sm:gap-14">
            {others.map((pkg) => (
              <button
                key={pkg.key}
                type="button"
                onClick={() => setActiveKey(pkg.key)}
                className="group flex flex-col items-center gap-3 cursor-pointer"
                aria-label={`Show ${pkg.name} packaging`}
              >
                <div className="relative aspect-[3/4] w-24 transition-transform duration-300 group-hover:scale-105 sm:w-32">
                  <Image
                    src={pkg.closed}
                    alt={`${pkg.name} packaging`}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {pkg.name}
                </p>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
