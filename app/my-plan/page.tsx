"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { useApp } from "@/components/AppProvider";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";
import Loading from "@/components/Loading";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const { plan, saved, doneMap, removeFromPlan, removeFromSaved, toggleDone, hydrated } =
    useApp();
  const [tab, setTab] = useState<Tab>("plan");

  const metrics = useMemo(() => {
    const exercises = plan.length;
    const minutes = plan.reduce((sum, w) => sum + w.duration, 0);
    const calories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);
    return { exercises, minutes, calories };
  }, [plan]);

  const activeList = tab === "plan" ? plan : saved;

  return (
    <div className="mx-auto max-w-shell px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold uppercase text-bone sm:text-4xl">
        My Plan
      </h1>
      <p className="mt-2 text-sm text-mute">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { label: "Exercises", value: metrics.exercises },
          { label: "Minutes", value: metrics.minutes },
          { label: "Calories", value: metrics.calories },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-card border border-hairline bg-surface p-4 text-center sm:p-6"
          >
            <p className="font-display text-2xl font-bold text-accent sm:text-3xl">
              {m.value}
            </p>
            <p className="mt-1 font-display text-xs font-semibold uppercase tracking-wider text-mute">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-2 border-b border-hairline">
        <button
          type="button"
          onClick={() => setTab("plan")}
          className={`px-4 py-3 font-display text-sm font-semibold uppercase tracking-wider transition ${
            tab === "plan"
              ? "border-b-2 border-accent text-accent"
              : "text-mute hover:text-bone"
          }`}
        >
          Today&apos;s Plan
        </button>
        <button
          type="button"
          onClick={() => setTab("saved")}
          className={`px-4 py-3 font-display text-sm font-semibold uppercase tracking-wider transition ${
            tab === "saved"
              ? "border-b-2 border-accent text-accent"
              : "text-mute hover:text-bone"
          }`}
        >
          Saved
        </button>
      </div>

      <div className="mt-6">
        {!hydrated && <Loading label="Loading workouts…" />}

        {hydrated && activeList.length === 0 && (
          <div className="flex flex-col items-center gap-3 rounded-card border border-hairline bg-surface px-6 py-20 text-center">
            <ClipboardList className="h-8 w-8 text-mute" />
            <h2 className="font-display text-xl font-bold uppercase text-bone">
              Nothing here yet
            </h2>
            <p className="max-w-xs text-sm text-mute">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-3 inline-flex items-center gap-2 rounded-card bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-accent-dim"
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
