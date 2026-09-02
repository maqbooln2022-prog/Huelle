import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="flex h-9 items-center justify-center gap-1 bg-foreground px-6 text-center text-[11px] font-medium tracking-wide text-background">
      <Link href="/cases" className="underline underline-offset-2 hover:opacity-80">
        New: Air Case now available
      </Link>
      <span className="hidden text-background/50 sm:inline">·</span>
      <span className="hidden sm:inline">Free shipping over ₹999</span>
    </div>
  );
}
