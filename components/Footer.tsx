export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-hairline bg-ink"
      style={{
        backgroundImage:
          'radial-gradient(rgba(163,230,53,0.04) 1px, transparent 1px)',
        backgroundSize: '3px 3px',
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-32 -top-32 h-64 w-64 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(163,230,53,0.6) 0%, rgba(163,230,53,0) 70%)',
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(163,230,53,0.6) 0%, rgba(163,230,53,0) 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-shell flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="FitLog logo" className="h-5 w-5" />
          <span className="font-display text-base font-semibold tracking-wide text-bone opacity-90">
            FITLOG
          </span>
        </div>
        <p className="text-center text-xs text-mute sm:text-right opacity-70">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}