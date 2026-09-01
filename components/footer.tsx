export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-center lg:px-10">
        <p className="text-lg font-bold uppercase tracking-[0.15em]">
          H&uuml;lle
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} H&uuml;lle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
