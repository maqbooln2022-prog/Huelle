import Link from "next/link";

const columns = [
  {
    heading: "Shop",
    links: [
      { label: "Bestsellers", href: "/cases" },
      { label: "Phone Cases", href: "/cases" },
      { label: "Case Bundles", href: "/cases" },
      { label: "Resellers", href: "/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/" },
      { label: "Terms & Conditions", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Warranty", href: "/" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Shipping Policy", href: "/" },
      { label: "Returns Policy", href: "/" },
      { label: "Contact Us", href: "/" },
      { label: "Track My Order", href: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-lg font-bold uppercase tracking-[0.15em]">
              H&uuml;lle
            </p>
            <p className="mt-3 max-w-[220px] text-sm text-muted-foreground">
              Minimalist phone cases, designed with intention.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {["Instagram", "Facebook", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-8 items-center justify-center rounded-full px-3 text-xs font-medium transition-colors hover:bg-card"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} H&uuml;lle. All rights reserved.</p>
          <p>Made for phones that go everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
