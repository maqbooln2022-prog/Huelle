"use client";

import { motion } from "framer-motion";

export function FeatureHighlights({
  title,
  highlights,
}: {
  title: string;
  highlights: { title: string; body: string }[];
}) {
  return (
    <section className="border-t border-border bg-card py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
