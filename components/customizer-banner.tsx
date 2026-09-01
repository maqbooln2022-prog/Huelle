"use client";

import { motion } from "framer-motion";
import { Palette, Type, Image as ImageIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const icons = [
  { Icon: Palette, label: "Color" },
  { Icon: Type, label: "Text" },
  { Icon: ImageIcon, label: "Photo" },
  { Icon: Sparkles, label: "Finish" },
];

export function CustomizerBanner() {
  return (
    <section className="bg-[#F3F1EC]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-1 sm:gap-6">
          {icons.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-xl bg-surface shadow-sm"
            >
              <Icon className="h-7 w-7" strokeWidth={1.25} />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 text-center lg:order-2 lg:text-left"
        >
          <h2 className="text-3xl font-bold uppercase tracking-[0.1em] sm:text-4xl">
            Customizer
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-base font-light text-muted-foreground lg:mx-0">
            Design your own in minutes.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button variant="outline" className="px-8 text-sm uppercase">
              Start designing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
