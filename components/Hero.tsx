export default function Hero() {
  return (
    <section className="mx-auto max-w-shell px-4 pt-8 sm:px-6 lg:px-8">
      <div
        className="relative grid items-center gap-10 overflow-hidden rounded-2xl border border-hairline bg-surface px-6 py-12 sm:px-10 md:grid-cols-2 lg:px-14 lg:py-16"
        style={{
          backgroundImage:
            'radial-gradient(rgba(163,230,53,0.04) 1px, transparent 1px)',
          backgroundSize: '3px 3px',
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(163,230,53,0.6) 0%, rgba(163,230,53,0) 70%)',
            }}
          />
          <div
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(163,230,53,0.6) 0%, rgba(163,230,53,0) 70%)',
            }}
          />
        </div>

        <div className="relative z-10">
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

        <div className="relative z-10 hidden justify-self-end md:flex md:justify-end">
          <img
            src="/banner.png"
            alt="Cycling workout illustration"
            className="h-72 w-auto object-contain md:h-64 lg:h-72 x5:h-80"
          />
        </div>
      </div>
    </section>
  );
}