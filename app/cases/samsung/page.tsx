import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Samsung Cases — Coming Soon — Hülle",
  description:
    "Hülle is bringing Form, Duo, Air, and Gen-Z to Samsung Galaxy. Samsung cases are coming soon.",
};

export default function SamsungCasesPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center lg:py-32">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card">
        <Sparkles className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h1 className="mt-6 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Samsung Cases
      </h1>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Coming soon
      </p>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
        We&apos;re bringing Form, Duo, Air, and the Gen-Z Collection to
        Samsung Galaxy. Same materials, same fit obsession &mdash; just
        built for a different camera module. Check back soon, or explore
        what&apos;s live today for iPhone.
      </p>
      <Link
        href="/cases"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium uppercase tracking-wide text-background transition-opacity hover:opacity-90"
      >
        Shop iPhone Cases
      </Link>
    </div>
  );
}
