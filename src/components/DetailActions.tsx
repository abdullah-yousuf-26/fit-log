"use client";

import { Workout } from "@/types";
import { usePlan } from "@/context/PlanContext";
import toast from "react-hot-toast";
import { FaCalendarPlus, FaBookmark } from "react-icons/fa";

export default function DetailActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater } = usePlan();

  const handleAddToPlan = () => {
    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSaveForLater = () => {
    saveForLater(workout);
    toast.success("Saved for later");
  };

  return (
    <div className="flex flex-wrap gap-3 mt-8">
      <button
        onClick={handleAddToPlan}
        className="flex items-center gap-2 bg-[#ccff00] text-black text-sm font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition"
      >
        <FaCalendarPlus /> Add to today's plan
      </button>
      <button
        onClick={handleSaveForLater}
        className="flex items-center gap-2 border border-white/15 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:border-[#ccff00] hover:text-[#ccff00] transition"
      >
        <FaBookmark /> Save for later
      </button>
    </div>
  );
}
