"use client";

import Link from "next/link";
import { Clock, Flame, Star, CheckCircle2, X } from "lucide-react";
import { Workout } from "@/lib/types";

export default function PlanWorkoutCard({
  workout,
  done,
  onToggleDone,
  onRemove,
  showDone = true,
}: {
  workout: Workout;
  done?: boolean;
  onToggleDone?: () => void;
  onRemove: () => void;
  showDone?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-card border border-hairline bg-surface p-4 sm:flex-row sm:items-center">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-card bg-surface-2">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3
          className={`font-display text-base font-semibold uppercase tracking-wide ${
            done ? "text-mute line-through" : "text-bone"
          }`}
        >
          {workout.name}
        </h3>
        <p className="mt-1 text-xs text-mute">{workout.equipment}</p>
        <div className="mt-2 flex items-center gap-4 text-xs text-mute">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-accent" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5 text-accent" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-accent" />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:shrink-0">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-card border border-hairline px-3 py-2 font-display text-xs font-semibold uppercase tracking-wider text-bone transition hover:border-accent hover:text-accent"
        >
          View Details
        </Link>
        {showDone && (
          <button
            type="button"
            onClick={onToggleDone}
            aria-label="Mark as done"
            className={`flex h-9 w-9 items-center justify-center rounded-card border transition ${
              done
                ? "border-accent bg-accent text-ink"
                : "border-hairline text-mute hover:border-accent hover:text-accent"
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
          </button>
        )}
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove"
          className="flex h-9 w-9 items-center justify-center rounded-card border border-hairline text-mute transition hover:border-red-400 hover:text-red-400"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
