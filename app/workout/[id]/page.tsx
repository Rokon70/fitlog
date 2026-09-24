import { notFound } from "next/navigation";
import { Clock, Flame, Star } from "lucide-react";
import { getWorkout } from "@/lib/api";
import DetailActions from "@/components/DetailActions";

export default async function WorkoutDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const workout = await getWorkout(params.id);

  if (!workout) {
    notFound();
  }

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: String(workout.sets) },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: String(workout.rating) },
  ];

  return (
    <div className="mx-auto max-w-shell px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-square w-full overflow-hidden rounded-card border border-hairline bg-surface lg:sticky lg:top-24 lg:self-start">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-hairline px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-wider text-mute"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-bone sm:text-4xl">
            {workout.name}
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-mute">
            {workout.description}
          </p>

          <div className="mt-6 flex items-center gap-5 text-sm text-mute">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent" />
              {workout.duration} min
            </span>
            <span className="flex items-center gap-1.5">
              <Flame className="h-4 w-4 text-accent" />
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-accent" />
              {workout.rating}
            </span>
          </div>

          <dl className="mt-8 overflow-hidden rounded-card border border-hairline">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-4 py-3 text-sm ${
                  i % 2 === 0 ? "bg-surface" : "bg-surface-2"
                }`}
              >
                <dt className="font-display font-semibold uppercase tracking-wider text-mute">
                  {spec.label}
                </dt>
                <dd className="text-bone">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-bone">
              Instructions
            </h2>
            <ol className="mt-4 space-y-4">
              {workout.instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-3 font-display text-xs font-semibold text-accent">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <DetailActions workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
}
