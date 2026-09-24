"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Workout } from "@/lib/types";

const PLAN_KEY = "fitlog.plan";
const SAVED_KEY = "fitlog.saved";
const PLAN_CAP = 5;

interface DoneMap {
  [id: number]: boolean;
}

interface Toast {
  id: number;
  message: string;
}

interface AppContextValue {
  plan: Workout[];
  saved: Workout[];
  doneMap: DoneMap;
  planCap: number;
  isPlanFull: boolean;
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  toggleDone: (id: number) => void;
  toasts: Toast[];
  showToast: (message: string) => void;
  hydrated: boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

function readStorage(key: string): Workout[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as Workout[]) : [];
  } catch {
    return [];
  }
}

function readDoneMap(): DoneMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem("fitlog.done");
    return raw ? (JSON.parse(raw) as DoneMap) : {};
  } catch {
    return {};
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [doneMap, setDoneMap] = useState<DoneMap>({});
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPlan(readStorage(PLAN_KEY));
    setSaved(readStorage(SAVED_KEY));
    setDoneMap(readDoneMap());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }, [plan, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("fitlog.done", JSON.stringify(doneMap));
  }, [doneMap, hydrated]);

  const showToast = useCallback((message: string) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }, []);

  const addToPlan = useCallback(
    (workout: Workout) => {
      setPlan((prev) => {
        if (prev.some((w) => w.id === workout.id)) {
          showToast(`${workout.name} is already in today's plan`);
          return prev;
        }
        if (prev.length >= PLAN_CAP) {
          showToast("Today's plan is full — five lifts max");
          return prev;
        }
        showToast("Added to today's plan");
        return [...prev, workout];
      });
    },
    [showToast]
  );

  const addToSaved = useCallback(
    (workout: Workout) => {
      setSaved((prev) => {
        if (prev.some((w) => w.id === workout.id)) {
          showToast(`${workout.name} is already saved`);
          return prev;
        }
        showToast("Saved for later");
        return [...prev, workout];
      });
    },
    [showToast]
  );

  const removeFromPlan = useCallback(
    (id: number) => {
      setPlan((prev) => {
        const target = prev.find((w) => w.id === id);
        if (target) showToast(`Removed ${target.name} from today's plan`);
        return prev.filter((w) => w.id !== id);
      });
    },
    [showToast]
  );

  const removeFromSaved = useCallback(
    (id: number) => {
      setSaved((prev) => {
        const target = prev.find((w) => w.id === id);
        if (target) showToast(`Removed ${target.name} from saved`);
        return prev.filter((w) => w.id !== id);
      });
    },
    [showToast]
  );

  const toggleDone = useCallback(
    (id: number) => {
      setDoneMap((prev) => {
        const next = { ...prev, [id]: !prev[id] };
        showToast(next[id] ? "Marked as done" : "Marked as not done");
        return next;
      });
    },
    [showToast]
  );

  const value = useMemo<AppContextValue>(
    () => ({
      plan,
      saved,
      doneMap,
      planCap: PLAN_CAP,
      isPlanFull: plan.length >= PLAN_CAP,
      addToPlan,
      addToSaved,
      removeFromPlan,
      removeFromSaved,
      toggleDone,
      toasts,
      showToast,
      hydrated,
    }),
    [
      plan,
      saved,
      doneMap,
      addToPlan,
      addToSaved,
      removeFromPlan,
      removeFromSaved,
      toggleDone,
      toasts,
      showToast,
      hydrated,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
