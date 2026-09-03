"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { ProductBadges } from "@/components/product-badges";
import { ColorSwatches } from "@/components/color-swatches";
import { DeviceSelect } from "@/components/device-select";
import { TrustBadges } from "@/components/trust-badges";
import { Accordion } from "@/components/accordion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { shadeSlug, type CaseLine } from "@/lib/products";

const infoItems = [
  {
    title: "Information",
    body: "Precision-molded shell with a soft-touch finish, engineered for a snug, rattle-free fit around your device.",
  },
  {
    title: "Shipping & Returns",
    body: "Free shipping on orders over ₹999. Every case ships within 1-2 business days, with a 30-day return window.",
  },
  {
    title: "Contact Us",
    body: "Questions about fit or compatibility? Reach our support team any time and we'll get back to you within a day.",
  },
];

const defaultGalleryLabels = ["Back view", "Camera detail", "Logo detail"];

export function ProductDetail({ line }: { line: CaseLine }) {
  const searchParams = useSearchParams();
  const [selectedColor, setSelectedColor] = useState(() => {
    const requested = searchParams.get("shade");
    return (
      line.colors.find((color) => shadeSlug(color.name) === requested) ??
      line.colors[0]
    );
  });
  const [selectedDevice, setSelectedDevice] = useState(
    () => line.devices.find((d) => !d.comingSoon)?.name ?? line.devices[0].name
  );
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  const gallery =
    selectedColor.images ?? [selectedColor.image ?? line.image];
  const mainSrc = gallery[Math.min(activeImage, gallery.length - 1)];
  const angleLabels =
    selectedColor.imageLabels ?? line.galleryLabels ?? defaultGalleryLabels;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.div
            key={mainSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F0EFEA]"
          >
            <ProductBadges badges={line.badges} className="absolute left-5 top-5 z-10" />
            <Image
              src={mainSrc}
              alt={`${line.name} in ${selectedColor.name} — ${angleLabels[Math.min(activeImage, gallery.length - 1)]}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="object-cover object-top"
            />
          </motion.div>

          {gallery.length > 1 && (
            <div className="mt-4 flex gap-3">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={angleLabels[i] ?? `View ${i + 1}`}
                  className={`relative aspect-square w-20 overflow-hidden rounded-lg bg-[#F0EFEA] transition-all cursor-pointer ${
                    i === Math.min(activeImage, gallery.length - 1)
                      ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            {line.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{line.tagline}</p>

          <p className="mt-4 text-xl font-semibold">{formatPrice(line.price)}</p>

          <div className="mt-6">
            <ColorSwatches
              colors={line.colors}
              selected={selectedColor}
              onSelect={(color) => {
                setSelectedColor(color);
                setActiveImage(0);
              }}
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
                image: selectedColor.image ?? line.image,
                badges: line.badges,
              })
            }
          >
            Add to cart
          </Button>

          <div className="mt-4 flex flex-col gap-1.5 text-xs text-muted-foreground">
            <p>30 days to change your mind — full refund on unused cases.</p>
            <p>3-month warranty against manufacturing defects.</p>
            <p>Ships in 1–2 business days. Free shipping over ₹999.</p>
          </div>

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
