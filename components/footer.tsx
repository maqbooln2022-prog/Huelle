import Link from "next/link";

const columns = [
  {
    heading: "Shop",
    links: [
      { label: "iPhone Cases", href: "/cases" },
      { label: "Form Case", href: "/cases/form-case" },
      { label: "Duo Case", href: "/cases/duo-case" },
      { label: "Air Case", href: "/cases/air-case" },
      { label: "Gen-Z Collection", href: "/cases/gen-z" },
      { label: "Samsung Cases", href: "/cases/samsung" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Shipping & Returns", href: "/returns" },
      { label: "Warranty", href: "/warranty" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-lg font-bold uppercase tracking-[0.15em]">
              H&uuml;lle
            </p>
            <p className="mt-3 max-w-[240px] text-sm text-muted-foreground">
              H&uuml;lle is German for &ldquo;shell.&rdquo; Minimalist phone
              cases, designed with intention.
            </p>
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
