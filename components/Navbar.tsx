"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useApp } from "./AppProvider";

const links = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 overflow-hidden border-b border-hairline bg-ink/95 backdrop-blur"
      style={{
        backgroundImage:
          "radial-gradient(rgba(163,230,53,0.05) 1px, transparent 1px)",
        backgroundSize: "3px 3px",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(163,230,53,0.4) 0%, rgba(163,230,53,0) 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-16 max-w-shell items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <img src="/logo.png" alt="FitLog logo" className="h-6 w-6" />
          <span className="font-display text-lg font-bold tracking-wide text-bone">
            FITLOG
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent-wash text-accent"
                    : "text-mute hover:text-bone"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-mute transition hover:text-bone"
          >
            Plan
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-ink">
              {plan.length}
            </span>
          </Link>
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-mute transition hover:text-bone"
          >
            Saved
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-hairline text-[11px] font-semibold text-bone">
              {saved.length}
            </span>
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
        <nav className="relative z-10 flex flex-col gap-1 border-t border-hairline bg-ink px-4 py-3 md:hidden">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  active ? "bg-accent-wash text-accent" : "text-mute"
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
