import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-shell flex-col items-center px-4 py-28 text-center sm:px-6 lg:px-8">
      <Compass className="h-10 w-10 text-accent" />
      <h1 className="mt-6 font-display text-5xl font-bold uppercase text-bone">
        404
      </h1>
      <p className="mt-3 font-display text-lg font-semibold uppercase tracking-wide text-bone">
        Lost the plot
      </p>
      <p className="mt-2 max-w-sm text-sm text-mute">
        That page isn&apos;t in the library. Head back and pick a lift instead.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-card bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-accent-dim"
      >
        Go to workouts
      </Link>
    </div>
  );
}
