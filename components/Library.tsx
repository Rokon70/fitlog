"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { getWorkouts } from "@/lib/api";
import { SortKey, Workout } from "@/lib/types";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";
import Loading from "./Loading";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [sortKey, setSortKey] = useState<SortKey>("duration");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    getWorkouts()
      .then((data) => {
        if (!cancelled) {
          setWorkouts(data);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? workouts.filter(
          (w) =>
            w.name.toLowerCase().includes(q) ||
            w.muscleGroups.some((tag) => tag.toLowerCase().includes(q))
        )
      : workouts;
    return [...list].sort((a, b) => b[sortKey] - a[sortKey]);
  }, [workouts, sortKey, query]);

  return (
    <section id="library" className="mx-auto max-w-shell px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase text-bone sm:text-4xl">
            The Library
          </h2>
          <p className="mt-2 text-sm text-mute">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mute" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or tag"
              className="w-full rounded-card border border-hairline bg-surface py-2 pl-9 pr-3 text-sm text-bone outline-none transition placeholder:text-mute focus:border-accent sm:w-56"
            />
          </div>
          <SortDropdown value={sortKey} onChange={setSortKey} />
        </div>
      </div>

      <div className="mt-10">
        {status === "loading" && <Loading label="Loading workouts…" />}

        {status === "error" && (
          <p className="rounded-card border border-hairline bg-surface p-6 text-center text-sm text-mute">
            Couldn&apos;t load the library right now. Try refreshing the page.
          </p>
        )}

        {status === "ready" && filtered.length === 0 && (
          <p className="rounded-card border border-hairline bg-surface p-6 text-center text-sm text-mute">
            No lifts match &ldquo;{query}&rdquo;.
          </p>
        )}

        {status === "ready" && filtered.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
