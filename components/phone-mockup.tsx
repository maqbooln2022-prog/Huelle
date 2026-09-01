"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PhoneMockup({
  shade = "#EDE9E1",
  className,
  floatCard = true,
}: {
  shade?: string;
  className?: string;
  floatCard?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto aspect-[9/18.5] w-full max-w-[280px] rounded-[2.75rem] p-2 shadow-2xl"
        style={{ backgroundColor: shade }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-black/10 to-black/25">
          <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-black/40" />
          <div className="absolute right-3 top-24 h-14 w-1.5 rounded-full bg-black/15" />
          <div className="absolute left-0 top-20 h-8 w-1 rounded-r-full bg-black/15" />
          <div className="absolute left-0 top-32 h-12 w-1 rounded-r-full bg-black/15" />
          <div className="absolute right-2 top-3 h-16 w-16 rounded-2xl bg-black/20 backdrop-blur-sm">
            <div className="absolute left-2 top-2 h-5 w-5 rounded-full border border-white/20" />
            <div className="absolute right-2 top-2 h-5 w-5 rounded-full border border-white/20" />
            <div className="absolute bottom-2 left-2 h-5 w-5 rounded-full border border-white/20" />
          </div>
        </div>
      </motion.div>

      {floatCard && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-4 -left-4 rounded-xl bg-surface px-4 py-3 shadow-lg sm:-left-8"
        >
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Fits perfectly
          </p>
          <p className="text-sm font-medium">Precision molded</p>
        </motion.div>
      )}
    </div>
  );
}
