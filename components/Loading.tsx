import { Loader2 } from "lucide-react";

export default function Loading({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-mute">
      <Loader2 className="h-7 w-7 animate-spin text-accent" />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
