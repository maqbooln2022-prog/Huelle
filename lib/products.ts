export type Badge = "new" | "limited" | "magsafe";

export type ColorOption = {
  name: string;
  hex: string;
  image?: string;
  images?: string[];
  imageLabels?: string[];
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
  galleryLabels?: string[];
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
        name: "Oxblood",
        hex: "#6B2E2A",
        image: "/images/cases/form/form-oxblood-orange.webp",
        imageLabels: ["On orange iPhone", "On navy iPhone", "On white iPhone"],
        images: [
          "/images/cases/form/form-oxblood-orange.webp",
          "/images/cases/form/form-oxblood-navy.webp",
          "/images/cases/form/form-oxblood-white.webp",
        ],
      },
      {
        name: "Forest",
        hex: "#33513F",
        image: "/images/cases/form/form-forest-navy.webp",
        imageLabels: ["On navy iPhone", "On orange iPhone", "On white iPhone"],
        images: [
          "/images/cases/form/form-forest-navy.webp",
          "/images/cases/form/form-forest-orange.webp",
          "/images/cases/form/form-forest-white.webp",
        ],
      },
      {
        name: "Slate Blue",
        hex: "#5F7186",
        image: "/images/cases/form/form-slate-blue-white.webp",
        imageLabels: ["On white iPhone", "On navy iPhone", "On orange iPhone"],
        images: [
          "/images/cases/form/form-slate-blue-white.webp",
          "/images/cases/form/form-slate-blue-navy.webp",
          "/images/cases/form/form-slate-blue-orange.webp",
        ],
      },
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
    slug: "duo-case",
    name: "Duo Case",
    tagline: "Two tones, one silhouette",
    price: 1299,
    image: "/images/cases/duo/duo-olive.webp",
    badges: ["new", "magsafe"],
    galleryLabels: ["On navy iPhone", "On orange iPhone", "On white iPhone"],
    colors: [
      {
        name: "Olive",
        hex: "#4E5540",
        image: "/images/cases/duo/duo-olive.webp",
      },
      {
        name: "Navy",
        hex: "#33415A",
        image: "/images/cases/duo/duo-navy-orange.webp",
        images: [
          "/images/cases/duo/duo-navy-orange.webp",
          "/images/cases/duo/duo-navy-navy.webp",
          "/images/cases/duo/duo-navy-white.webp",
        ],
      },
      {
        name: "Burgundy",
        hex: "#6E3038",
        image: "/images/cases/duo/duo-burgundy-navy.webp",
        images: [
          "/images/cases/duo/duo-burgundy-navy.webp",
          "/images/cases/duo/duo-burgundy-orange.webp",
          "/images/cases/duo/duo-burgundy-white.webp",
        ],
      },
      {
        name: "Charcoal",
        hex: "#4A4E48",
        image: "/images/cases/duo/duo-charcoal-orange.webp",
        images: [
          "/images/cases/duo/duo-charcoal-orange.webp",
          "/images/cases/duo/duo-charcoal-navy.webp",
          "/images/cases/duo/duo-charcoal-white.webp",
        ],
      },
      {
        name: "Chocolate",
        hex: "#574A3B",
        image: "/images/cases/duo/duo-chocolate-white.webp",
        images: [
          "/images/cases/duo/duo-chocolate-white.webp",
          "/images/cases/duo/duo-chocolate-navy.webp",
          "/images/cases/duo/duo-chocolate-orange.webp",
        ],
      },
      {
        name: "Slate",
        hex: "#4C5A56",
        image: "/images/cases/duo/duo-slate-white.webp",
        images: [
          "/images/cases/duo/duo-slate-white.webp",
          "/images/cases/duo/duo-slate-navy.webp",
          "/images/cases/duo/duo-slate-orange.webp",
        ],
      },
    ],
    devices,
    description:
      "A soft-touch shell that leaves the camera plate open, so your iPhone's own colour completes the pair. Same raised-lip protection as the rest of the lineup — the second tone is already in your pocket.",
    highlights: [
      {
        title: "Your phone completes it",
        body: "The open camera plate shows your iPhone's own colour — every pairing is personal.",
      },
      {
        title: "Soft-touch finish",
        body: "A matte coating that feels warm in the hand and resists fingerprints.",
      },
      {
        title: "Raised protective lip",
        body: "Screen and lenses stay clear of every surface you set it on.",
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
    slug: "gen-z",
    name: "Gen-Z",
    tagline: "Prints with the volume up",
    price: 2499,
    image: "/images/cases/genz/genz-sunset-fade-navy.webp",
    badges: ["new", "limited"],
    galleryLabels: ["On navy iPhone", "On orange iPhone", "On white iPhone"],
    colors: [
      {
        name: "Sunset Fade",
        hex: "#EE8E75",
        image: "/images/cases/genz/genz-sunset-fade-navy.webp",
        images: [
          "/images/cases/genz/genz-sunset-fade-navy.webp",
          "/images/cases/genz/genz-sunset-fade-orange.webp",
          "/images/cases/genz/genz-sunset-fade-white.webp",
        ],
      },
      {
        name: "Ocean Fade",
        hex: "#8CA3DB",
        image: "/images/cases/genz/genz-ocean-fade-navy.webp",
        images: [
          "/images/cases/genz/genz-ocean-fade-navy.webp",
          "/images/cases/genz/genz-ocean-fade-orange.webp",
          "/images/cases/genz/genz-ocean-fade-white.webp",
        ],
      },
      {
        name: "Neon Dusk",
        hex: "#A02472",
        image: "/images/cases/genz/genz-neon-dusk-navy.webp",
        images: [
          "/images/cases/genz/genz-neon-dusk-navy.webp",
          "/images/cases/genz/genz-neon-dusk-orange.webp",
          "/images/cases/genz/genz-neon-dusk-white.webp",
        ],
      },
      {
        name: "Sherbet",
        hex: "#C7E79B",
        image: "/images/cases/genz/genz-sherbet-navy.webp",
        images: [
          "/images/cases/genz/genz-sherbet-navy.webp",
          "/images/cases/genz/genz-sherbet-orange.webp",
          "/images/cases/genz/genz-sherbet-white.webp",
        ],
      },
      {
        name: "Confetti Black",
        hex: "#232323",
        image: "/images/cases/genz/genz-confetti-black-navy.webp",
        images: [
          "/images/cases/genz/genz-confetti-black-navy.webp",
          "/images/cases/genz/genz-confetti-black-orange.webp",
          "/images/cases/genz/genz-confetti-black-white.webp",
        ],
      },
      {
        name: "Confetti Cream",
        hex: "#EDE5D4",
        image: "/images/cases/genz/genz-confetti-cream-navy.webp",
        images: [
          "/images/cases/genz/genz-confetti-cream-navy.webp",
          "/images/cases/genz/genz-confetti-cream-orange.webp",
          "/images/cases/genz/genz-confetti-cream-white.webp",
        ],
      },
    ],
    devices,
    description:
      "The ridged shell, reprinted for the feed — gradients and confetti that photograph as loud as they look. Same raised-lip protection, same MagSafe, zero restraint.",
    highlights: [
      {
        title: "Prints that stay put",
        body: "The graphic is bonded into the shell's finish, not stickered on top.",
      },
      {
        title: "Same ridged grip",
        body: "The Form Case silhouette underneath — ridges that hold on when your hands don't.",
      },
      {
        title: "Made for the camera",
        body: "Shot on every shade of iPhone — pick the print, the gallery shows your phone.",
      },
    ],
  },
];

export function getCaseLine(slug: string) {
  return caseLines.find((line) => line.slug === slug);
}

export function shadeSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
  line.colors.slice(0, 3).map((color) => ({
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
