import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-hairline bg-ink">
      <div className="mx-auto grid max-w-shell items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Workout Library
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] text-bone sm:text-5xl lg:text-6xl">
            Train with intent.
            <br />
            Log every set.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-card bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-accent-dim"
          >
            Browse Workouts
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-hairline bg-surface lg:aspect-square">
          <img
            src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
            alt="Athlete mid-lift, illustrating the FitLog workout library"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
