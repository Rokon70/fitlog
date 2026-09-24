"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { useApp } from "./AppProvider";

const links = [
  { href: "/", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-card bg-accent text-ink">
            <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-bone">
            FITLOG
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm font-medium uppercase tracking-wider transition-colors ${
                  active ? "text-accent" : "text-mute hover:text-bone"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-accent px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-ink transition hover:bg-accent-dim"
            aria-label={`Plan: ${plan.length} items`}
          >
            Plan {plan.length}
          </Link>
          <Link
            href="/my-plan"
            className="rounded-full border border-hairline px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-bone transition hover:border-accent hover:text-accent"
            aria-label={`Saved: ${saved.length} items`}
          >
            Saved {saved.length}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-card border border-hairline text-bone md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-ink px-4 py-3 md:hidden">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 font-display text-sm font-medium uppercase tracking-wider ${
                  active ? "text-accent" : "text-mute"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
