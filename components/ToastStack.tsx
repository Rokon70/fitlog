"use client";

import { CheckCircle2 } from "lucide-react";
import { useApp } from "./AppProvider";

export default function ToastStack() {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[100] flex -translate-x-1/2 flex-col gap-2 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className="flex items-center gap-2 rounded-card border border-hairline bg-surface-3 px-4 py-3 text-sm font-medium text-bone shadow-[0_10px_30px_rgba(0,0,0,0.4)] animate-[toast-in_0.2s_ease-out]"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
          {t.message}
        </div>
      ))}
    </div>
  );
}
