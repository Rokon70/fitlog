"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useApp } from "@/components/AppProvider";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";
import Loading from "@/components/Loading";
import SortDropdown from "@/components/SortDropdown";
import { SortKey } from "@/lib/types";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const { plan, saved, doneMap, removeFromPlan, removeFromSaved, toggleDone, hydrated } =
    useApp();
  const [tab, setTab] = useState<Tab>("plan");
  const [sortKey, setSortKey] = useState<SortKey>("duration");

  const metrics = useMemo(() => {
    const exercises = plan.length;
    const minutes = plan.reduce((sum, w) => sum + w.duration, 0);
    const calories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);
    return { exercises, minutes, calories };
  }, [plan]);

  const activeList = useMemo(() => {
    const list = tab === "plan" ? plan : saved;
    return [...list].sort((a, b) => b[sortKey] - a[sortKey]);
  }, [tab, plan, saved, sortKey]);

  return (
    <div className="mx-auto max-w-shell px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold uppercase text-bone sm:text-4xl">
        My Plan
      </h1>
      <p className="mt-2 text-sm text-mute">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8 grid grid-cols-3 divide-x divide-hairline rounded-2xl border border-hairline bg-surface">
        {[
          { label: "Exercises", value: metrics.exercises, accent: true },
          { label: "Minutes", value: metrics.minutes, accent: false },
          { label: "Calories", value: metrics.calories, accent: false },
        ].map((m) => (
          <div key={m.label} className="px-5 py-5 sm:px-8 sm:py-6">
            <p className="text-sm text-mute">{m.label}</p>
            <p
              className={`mt-1 font-display text-3xl font-bold ${
                m.accent ? "text-accent" : "text-bone"
              }`}
            >
              {m.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-1 rounded-full border border-hairline bg-surface p-1">
          <button
            type="button"
            onClick={() => setTab("plan")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              tab === "plan" ? "bg-surface-3 text-bone" : "text-mute"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            type="button"
            onClick={() => setTab("saved")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              tab === "saved" ? "bg-surface-3 text-bone" : "text-mute"
            }`}
          >
            Saved
          </button>
        </div>

        <SortDropdown value={sortKey} onChange={setSortKey} />
      </div>

      <div className="mt-6">
        {!hydrated && <Loading label="Loading workouts…" />}

        {hydrated && activeList.length === 0 && (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-surface px-6 py-20 text-center">
            <h2 className="font-display text-2xl font-bold uppercase text-bone">
              Nothing here yet
            </h2>
            <p className="max-w-xs text-sm text-mute">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-3 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-dim"
            >
              Go to workouts
            </Link>
          </div>
        )}

        {hydrated && activeList.length > 0 && (
          <div className="flex flex-col gap-3">
            {activeList.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                showDone={tab === "plan"}
                done={!!doneMap[workout.id]}
                onToggleDone={() => toggleDone(workout.id)}
                onRemove={() =>
                  tab === "plan"
                    ? removeFromPlan(workout.id)
                    : removeFromSaved(workout.id)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
