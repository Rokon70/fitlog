"use client";

import { useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";
import { Workout } from "@/lib/types";
import WorkoutCard from "./WorkoutCard";
import Loading from "./Loading";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

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

  return (
    <section id="library" className="mx-auto max-w-shell px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl font-bold uppercase text-bone sm:text-[32px]">
        The Library
      </h2>
      <p className="mt-2 text-sm text-mute">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-8">
        {status === "loading" && <Loading label="Loading workouts…" />}

        {status === "error" && (
          <p className="rounded-2xl border border-hairline bg-surface p-6 text-center text-sm text-mute">
            Couldn&apos;t load the library right now. Try refreshing the page.
          </p>
        )}

        {status === "ready" && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
