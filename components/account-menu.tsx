"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { User, LogOut } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export function AccountMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  if (status === "loading") {
    return <div className="h-9 w-9 shrink-0 rounded-full bg-card" />;
  }

  if (!session) {
    return (
      <button
        type="button"
        onClick={() => signIn("google")}
        aria-label="Sign in"
        className="hidden h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-card sm:flex"
      >
        <User className="h-4 w-4" strokeWidth={1.5} />
      </button>
    );
  }

  const initial = session.user?.name?.[0] ?? session.user?.email?.[0] ?? "?";

  return (
    <div className="relative hidden sm:block" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Account menu"
        className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-card transition-opacity hover:opacity-80"
      >
        {session.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name ?? "Account"}
            width={36}
            height={36}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-xs font-medium uppercase">{initial}</span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-surface py-2 shadow-lg">
          <div className="px-4 py-2">
            <p className="truncate text-sm font-medium">{session.user?.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {session.user?.email}
            </p>
          </div>
          <button
            type="button"
            onClick={() => signOut()}
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-card hover:text-foreground"
          >
            <LogOut className="h-4 w-4" strokeWidth={1.5} />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
