export type Badge = "new" | "limited" | "magsafe";

export type ColorOption = {
  name: string;
  hex: string;
  image?: string;
  images?: string[];
};

export type CaseLine = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  badges: Badge[];
  colors: ColorOption[];
  devices: string[];
  description: string;
  highlights: { title: string; body: string }[];
};

export const devices = [
  "iPhone 17 Pro Max",
  "iPhone 17 Pro",
  "iPhone 17",
  "iPhone 16 Pro Max",
  "iPhone 16 Pro",
  "iPhone 16",
];

export const caseLines: CaseLine[] = [
  {
    slug: "form-case",
    name: "Form Case",
    tagline: "Structured protection, signature silhouette",
    price: 1650,
    image: "/images/cases/form/form-black-back.webp",
    badges: ["new", "magsafe"],
    colors: [
      {
        name: "Midnight Black",
        hex: "#2E2E2D",
        image: "/images/cases/form/form-black-back.webp",
        images: [
          "/images/cases/form/form-black-back.webp",
          "/images/cases/form/form-black-camera.webp",
          "/images/cases/form/form-black-deboss.webp",
        ],
      },
      {
        name: "Ink Navy",
        hex: "#2E3F70",
        image: "/images/cases/form/form-navy-back.webp",
        images: [
          "/images/cases/form/form-navy-back.webp",
          "/images/cases/form/form-navy-camera.webp",
          "/images/cases/form/form-navy-deboss.webp",
        ],
      },
      {
        name: "Moss Green",
        hex: "#3E7C55",
        image: "/images/cases/form/form-moss-back.webp",
        images: [
          "/images/cases/form/form-moss-back.webp",
          "/images/cases/form/form-moss-camera.webp",
          "/images/cases/form/form-moss-deboss.webp",
        ],
      },
      {
        name: "Terracotta",
        hex: "#E8912D",
        image: "/images/cases/form/form-terracotta-back.webp",
        images: [
          "/images/cases/form/form-terracotta-back.webp",
          "/images/cases/form/form-terracotta-camera.webp",
          "/images/cases/form/form-terracotta-deboss.webp",
        ],
      },
      {
        name: "Rose Pink",
        hex: "#EE8FA6",
        image: "/images/cases/form/form-rose-back.webp",
        images: [
          "/images/cases/form/form-rose-back.webp",
          "/images/cases/form/form-rose-camera.webp",
          "/images/cases/form/form-rose-deboss.webp",
        ],
      },
      {
        name: "Walnut Brown",
        hex: "#9A6440",
        image: "/images/cases/form/form-walnut-back.webp",
        images: [
          "/images/cases/form/form-walnut-back.webp",
          "/images/cases/form/form-walnut-camera.webp",
          "/images/cases/form/form-walnut-deboss.webp",
        ],
      },
    ],
    devices,
    description:
      "Our most protective case, shaped by a single continuous edge. Form is built from a soft-touch bio-based shell over a shock-absorbing core, with a raised lip that keeps your screen and camera clear of the table.",
    highlights: [
      {
        title: "Raised camera lip",
        body: "A precise 1.2mm lip keeps your lenses off any surface.",
      },
      {
        title: "Soft-touch, low-fingerprint finish",
        body: "A matte coating engineered to resist smudges and scratches.",
      },
      {
        title: "Made from bio-based materials",
        body: "Shell composed of 60% plant-derived plastics.",
      },
    ],
  },
  {
    slug: "air-case",
    name: "Air Case",
    tagline: "Barely there, fully covered",
    price: 999,
    image: "/images/cases/air/air-graphite-back.webp",
    badges: ["magsafe"],
    colors: [
      {
        name: "Graphite",
        hex: "#474745",
        image: "/images/cases/air/air-graphite-back.webp",
        images: [
          "/images/cases/air/air-graphite-back.webp",
          "/images/cases/air/air-graphite-camera.webp",
          "/images/cases/air/air-graphite-deboss.webp",
        ],
      },
      {
        name: "Ink Navy",
        hex: "#3D4C77",
        image: "/images/cases/air/air-navy-back.webp",
        images: [
          "/images/cases/air/air-navy-back.webp",
          "/images/cases/air/air-navy-camera.webp",
          "/images/cases/air/air-navy-deboss.webp",
        ],
      },
      {
        name: "Sage Green",
        hex: "#97B291",
        image: "/images/cases/air/air-sage-back.webp",
        images: [
          "/images/cases/air/air-sage-back.webp",
          "/images/cases/air/air-sage-camera.webp",
          "/images/cases/air/air-sage-deboss.webp",
        ],
      },
      {
        name: "Rose Clay",
        hex: "#C98F93",
        image: "/images/cases/air/air-rose.webp",
      },
      {
        name: "Taupe",
        hex: "#AB9D84",
        image: "/images/cases/air/air-taupe-back.webp",
        images: [
          "/images/cases/air/air-taupe-back.webp",
          "/images/cases/air/air-taupe-camera.webp",
          "/images/cases/air/air-taupe-deboss.webp",
        ],
      },
    ],
    devices,
    description:
      "For those who want their phone to feel like their phone. Air is a 0.9mm woven aramid-fibre shell that preserves the original weight and feel of your device, without giving up drop protection where it counts.",
    highlights: [
      {
        title: "0.9mm profile",
        body: "Thinnest case in the lineup, engineered for pocket comfort.",
      },
      {
        title: "Reinforced corners",
        body: "Impact-rated corner zones absorb everyday drops.",
      },
      {
        title: "Precision port cutouts",
        body: "Cut to the millimeter for a clean, exact fit.",
      },
    ],
  },
  {
    slug: "clear-case",
    name: "Clear Case",
    tagline: "Let the original design speak",
    price: 599,
    image: "/images/cases/clear-case.jpg",
    badges: ["magsafe"],
    colors: [
      { name: "Crystal Clear", hex: "#F4F3EF" },
      { name: "Smoke Tint", hex: "#B9B6AE" },
    ],
    devices,
    description:
      "A transparent shell built with an anti-yellowing polymer, so it looks as clean on day 500 as it did on day one. Shows off your phone's original color while adding real drop protection.",
    highlights: [
      {
        title: "Anti-yellowing formula",
        body: "UV-stable polymer resists discoloration over time.",
      },
      {
        title: "Scratch-resistant back",
        body: "Hard-coated panel keeps the clear finish clear.",
      },
      {
        title: "Slim enough for any pocket",
        body: "1.1mm profile that barely changes your phone's footprint.",
      },
    ],
  },
];

export function getCaseLine(slug: string) {
  return caseLines.find((line) => line.slug === slug);
}

export const productFaqs = [
  {
    title: "Is this case MagSafe compatible?",
    body: "Look for the MagSafe badge on the product page — most of our cases support MagSafe out of the box, with magnets built into the shell.",
  },
  {
    title: "How protective is it?",
    body: "Every case is drop-tested from 1.8 meters onto concrete. Form offers the most protection; Air trades a little drop height for a slimmer profile.",
  },
  {
    title: "Does it come with a warranty?",
    body: "Yes — every case includes a 1-year warranty against manufacturing defects. If something's wrong with the materials or craftsmanship, we'll replace it.",
  },
  {
    title: "Can I return or exchange it?",
    body: "You have 100 days to return an unused case for a full refund. Contact support to start a return.",
  },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  shade: string;
  swatch: string;
  slug: string;
  image: string;
  badges: Badge[];
};

export const bestSellers: Product[] = caseLines.flatMap((line) =>
  line.colors.slice(0, line.slug === "clear-case" ? 2 : 3).map((color) => ({
    id: `${line.slug}-${color.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: line.name,
    price: line.price,
    shade: color.name,
    swatch: color.hex,
    slug: line.slug,
    image: color.image ?? line.image,
    badges: line.badges,
  }))
);
