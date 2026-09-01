"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/phone-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Your style.
            <br />
            Your case.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base font-light text-muted-foreground sm:text-lg lg:mx-0">
            Minimalist, precision-crafted phone cases designed to move with
            you &mdash; and to look effortless doing it.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button size="default" className="px-8 text-sm uppercase">
              Create now
            </Button>
          </div>
        </motion.div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-x-[-20%] top-[8%] bottom-[-4%] rounded-[3rem] bg-gradient-to-b from-[#DDD6C7] to-[#C9BFA9] opacity-70"
              style={{ clipPath: "ellipse(55% 60% at 50% 45%)" }}
            />
            <PhoneMockup shade="#1B1B1B" className="relative z-10 w-64 sm:w-72" />
          </div>
        </div>
      </div>
    </section>
  );
}
