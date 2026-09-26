"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/types";
import PlanCard from "@/components/PlanCard";
import { FaChevronDown } from "react-icons/fa";

type Tab = "plan" | "saved";
type SortKey = "duration" | "caloriesBurned" | "rating";

export default function MyPlanPage() {
  const { plan, saved, loaded } = usePlan();
  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

// Loading 

  if (!loaded) {
    return (
      <p className="text-center py-20 text-gray-500 text-sm">
        Loading workouts…
      </p>
    );
  }

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => b[sortBy] - a[sortBy]);

  const totalMinutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  const tabs: { key: Tab; label: string }[] = [
    { key: "plan", label: "Today's Plan" },
    { key: "saved", label: "Saved" },
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">


{/* title */}
      <h1 className="text-3xl font-bold uppercase">My Plan</h1>
      <p className="text-gray-500 text-sm mt-1">
        Cap of five lifts for today. Finish them, then load more.
      </p>



 {/* Summary */}
      <div className="bg-[#15171c] rounded-2xl mt-6 grid grid-cols-3 divide-x divide-white/5">
        <div className="p-5">
          <p className="text-gray-500 text-xs uppercase">Exercises</p>
          <p className="text-3xl font-bold text-[#ccff00] mt-1">
            {plan.length}
          </p>
        </div>
        <div className="p-5">
          <p className="text-gray-500 text-xs uppercase">Minutes</p>
          <p className="text-3xl font-bold mt-1">{totalMinutes}</p>
        </div>
        <div className="p-5">
          <p className="text-gray-500 text-xs uppercase">Calories</p>
          <p className="text-3xl font-bold mt-1">{totalCalories}</p>
        </div>
      </div>




{/* Tabs and Sort */}
      <div className="flex items-center justify-between mt-6 flex-wrap gap-3">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={
                activeTab === tab.key
                  ? "px-4 py-1.5 rounded-full bg-[#1f2712] text-white text-xs font-semibold"
                  : "px-4 py-1.5 text-gray-500 hover:text-white text-xs transition"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>





{/* Sort By */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-xs">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="appearance-none bg-[#15171c] border border-white/10 rounded-lg text-xs text-white pl-3 pr-8 py-1.5 outline-none cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="caloriesBurned">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <FaChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* empty state */}
      
      <div className="mt-5 space-y-3">
        {sortedList.length === 0 ? (
          <div className="border border-dashed border-white/10 rounded-2xl py-16 text-center">
            <h3 className="font-bold uppercase text-lg">Nothing here yet</h3>
            <p className="text-gray-500 text-sm mt-1">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="inline-block mt-5 bg-[#ccff00] text-black text-xs font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          sortedList.map((workout: Workout) => (
            <PlanCard key={workout.id} workout={workout} tab={activeTab} />
          ))
        )}
      </div>
    </main>
  );
}
