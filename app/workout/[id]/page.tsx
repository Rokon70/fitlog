import { notFound } from "next/navigation";
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
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface lg:sticky lg:top-24 lg:self-start">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold uppercase leading-tight text-bone sm:text-4xl">
            {workout.name}
          </h1>

          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-mute">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-3 py-1 font-display text-xs font-semibold text-ink"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="mt-8 overflow-hidden rounded-2xl border border-hairline bg-surface">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                  i !== specs.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <dt className="font-display text-xs font-semibold uppercase tracking-wider text-mute">
                  {spec.label}
                </dt>
                <dd className="text-bone">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9">
            <h2 className="font-display text-lg font-bold uppercase text-bone">
              Instructions
            </h2>
            <ol className="mt-4 space-y-3">
              {workout.instructions.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-mute"
                >
                  <span className="text-bone">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-9">
            <DetailActions workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
}
