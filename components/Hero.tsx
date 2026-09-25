export default function Hero() {
  return (
    <section className="mx-auto max-w-shell px-4 pt-8 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 rounded-2xl border border-hairline bg-surface px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-16">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Workout Library
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] text-bone sm:text-5xl">
            Train with intent. Log every set.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-mute">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-8 inline-flex items-center rounded bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-accent-dim"
          >
            Browse Workouts
          </a>
        </div>

        <div className="hidden justify-self-end lg:flex lg:justify-end">
          <img
            src="/banner.png"
            alt="Cycling workout illustration"
            className="h-72 w-auto object-contain x5:h-80"
          />
        </div>
      </div>
    </section>
  );
}
