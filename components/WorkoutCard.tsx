import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/lib/types";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-card border border-hairline bg-surface transition hover:border-accent/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hairline px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wider text-mute"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-lg font-semibold uppercase leading-tight text-bone">
          {workout.name}
        </h3>

        <p className="text-sm text-mute">{workout.equipment}</p>

        <div className="mt-auto flex items-center gap-4 border-t border-hairline pt-3 text-xs text-mute">
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
    </Link>
  );
}
