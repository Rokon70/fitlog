export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="mx-auto flex max-w-shell flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="FitLog logo" className="h-5 w-5" />
          <span className="font-display text-base font-semibold tracking-wide text-bone">
            FITLOG
          </span>
        </div>
        <p className="text-center text-xs text-mute sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
