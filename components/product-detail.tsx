"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { ProductBadges } from "@/components/product-badges";
import { StarRating } from "@/components/star-rating";
import { ColorSwatches } from "@/components/color-swatches";
import { DeviceSelect } from "@/components/device-select";
import { TrustBadges } from "@/components/trust-badges";
import { Accordion } from "@/components/accordion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import type { CaseLine } from "@/lib/products";

const infoItems = [
  {
    title: "Information",
    body: "Precision-molded shell with a soft-touch finish, engineered for a snug, rattle-free fit around your device.",
  },
  {
    title: "Shipping & Returns",
    body: "Free shipping on orders over ₹999. Every case ships within 1-2 business days, with a 100-day return window.",
  },
  {
    title: "Contact Us",
    body: "Questions about fit or compatibility? Reach our support team any time and we'll get back to you within a day.",
  },
];

export function ProductDetail({ line }: { line: CaseLine }) {
  const [selectedColor, setSelectedColor] = useState(line.colors[0]);
  const [selectedDevice, setSelectedDevice] = useState(line.devices[0]);
  const { addItem } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square overflow-hidden rounded-2xl bg-[#F0EFEA]"
        >
          <ProductBadges badges={line.badges} className="absolute left-5 top-5 z-10" />
          <Image
            src={line.image}
            alt={`${line.name} in ${selectedColor.name}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        </motion.div>

        <div>
          <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            {line.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{line.tagline}</p>

          <div className="mt-4 flex items-center justify-between">
            <StarRating rating={line.rating} reviewCount={line.reviewCount} />
            <p className="text-xl font-semibold">{formatPrice(line.price)}</p>
          </div>

          <div className="mt-6">
            <ColorSwatches
              colors={line.colors}
              selected={selectedColor}
              onSelect={setSelectedColor}
            />
          </div>

          {line.badges.includes("magsafe") && (
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
              MagSafe Compatible
            </div>
          )}

          <div className="mt-6">
            <DeviceSelect
              devices={line.devices}
              value={selectedDevice}
              onChange={setSelectedDevice}
            />
          </div>

          <Button
            className="mt-4 w-full text-sm uppercase"
            onClick={() =>
              addItem({
                id: `${line.slug}-${selectedColor.name.toLowerCase().replace(/\s+/g, "-")}`,
                name: line.name,
                price: line.price,
                shade: selectedColor.name,
                swatch: selectedColor.hex,
                slug: line.slug,
                image: line.image,
                badges: line.badges,
              })
            }
          >
            Add to cart
          </Button>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {line.description}
          </p>

          <div className="mt-8">
            <TrustBadges />
          </div>

          <div className="mt-8">
            <Accordion items={infoItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
