import { Workout } from "@/types";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch workouts");
  return res.json();
}

export async function getWorkoutById(id: string): Promise<Workout> {
  const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch workout");
  return res.json();
}