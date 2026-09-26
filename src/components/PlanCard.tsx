"use client";

import Link from "next/link";
import { Workout } from "@/types";
import { usePlan } from "@/context/PlanContext";
import toast from "react-hot-toast";
import { FaClock, FaFire, FaStar, FaCheck, FaTimes } from "react-icons/fa";

export default function PlanCard({
  workout,
  tab,
}: {
  workout: Workout;
  tab: "plan" | "saved";
}) {
  const { markAsDone, removeFromPlan, removeFromSaved } = usePlan();

  const handleMarkDone = () => {
    markAsDone(workout.id);
    toast.success("Marked as done. Nice work!");
  };

  const handleRemove = () => {
    if (tab === "plan") removeFromPlan(workout.id);
    else removeFromSaved(workout.id);
    toast.success("Removed from list");
  };

  return (
    <div className="bg-[#15171c] border border-white/5 rounded-2xl p-4 flex items-center gap-4 flex-wrap">
      {/* Thumbnail */}
      <img
        src={workout.image}
        alt={workout.name}
        className="w-16 h-16 rounded-xl object-cover shrink-0"
      />

      {/* Info */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-bold uppercase text-sm">{workout.name}</h3>
        <p className="text-gray-500 text-xs">{workout.equipment}</p>
        <div className="flex gap-3 mt-1.5 text-[11px] text-gray-400">
          <span className="flex items-center gap-1">
            <FaClock className="text-gray-500" /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <FaFire className="text-gray-500" /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <FaStar className="text-gray-500" /> {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="text-xs font-semibold border border-white/10 rounded-full px-4 py-1.5 hover:border-[#ccff00] hover:text-[#ccff00] transition"
        >
          View Details
        </Link>

        {tab === "plan" && (
          <button
            onClick={handleMarkDone}
            className="flex items-center gap-1.5 text-xs font-bold bg-[#ccff00] text-black rounded-full px-4 py-1.5 hover:opacity-90 transition"
          >
            <FaCheck /> Mark as Done
          </button>
        )}

        <button
          onClick={handleRemove}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition"
        >
          <FaTimes className="text-xs" />
        </button>
      </div>
    </div>
  );
}
