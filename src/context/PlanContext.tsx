"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Workout } from "@/types";

interface PlanContextType {
  plan: Workout[];
  saved: Workout[];
  loaded: boolean;
  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [loaded, setLoaded] = useState(false);

// reload from storage 

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    if (storedPlan) setPlan(JSON.parse(storedPlan));
    if (storedSaved) setSaved(JSON.parse(storedSaved));
    setLoaded(true);
  }, []);



  
//state changes
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  const addToPlan = (workout: Workout) => {
    setPlan((prev) =>
      prev.some((w) => w.id === workout.id) ? prev : [...prev, workout]
    );
  };

  const saveForLater = (workout: Workout) => {
    setSaved((prev) =>
      prev.some((w) => w.id === workout.id) ? prev : [...prev, workout]
    );
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((w) => w.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((w) => w.id !== id));
  };

  const markAsDone = (id: number) => {
    setPlan((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        loaded,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}