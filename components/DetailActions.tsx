"use client";

import { ListPlus, Bookmark } from "lucide-react";
import { Workout } from "@/lib/types";
import { useApp } from "./AppProvider";

export default function DetailActions({ workout }: { workout: Workout }) {
  const { addToPlan, addToSaved, isPlanFull, plan } = useApp();
  const alreadyInPlan = plan.some((w) => w.id === workout.id);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={isPlanFull && !alreadyInPlan}
        className="inline-flex items-center justify-center gap-2 rounded-card bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-accent-dim disabled:cursor-not-allowed disabled:bg-surface-3 disabled:text-mute"
      >
        <ListPlus className="h-4 w-4" />
        Add to today&apos;s plan
      </button>
      <button
        type="button"
        onClick={() => addToSaved(workout)}
        className="inline-flex items-center justify-center gap-2 rounded-card border border-hairline px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-bone transition hover:border-accent hover:text-accent"
      >
        <Bookmark className="h-4 w-4" />
        Save for later
      </button>
    </div>
  );
}
