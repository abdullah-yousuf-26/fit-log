import Link from "next/link";
import { Workout } from "@/types";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

export default function Card({ workout }: { workout: Workout }) {
  return (
    <Link href={`/workout/${workout.id}`} className="block">
      <div className="bg-[#161616] rounded-2xl overflow-hidden hover:ring-1 hover:ring-[#ccff00]/40 transition h-full">


{/* image with group tags */}
        <div className="relative">
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-44 object-cover"
          />
          <div className="absolute bottom-2.5 left-3 flex gap-1.5">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-[#ccff00] text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase"
              >
                {group}
              </span>
            ))}
          </div>
        </div>

        {/* Card body */}
        <div className="p-4">
          <h3 className="font-bold uppercase text-white">{workout.name}</h3>
          <p className="text-gray-500 text-xs mt-0.5">{workout.equipment}</p>

          <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <FaClock className="text-gray-500" /> {workout.duration} min
            </span>
            <span className="flex items-center gap-1.5">
              <FaFire className="text-gray-500" /> {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5">
              <FaStar className="text-gray-500" /> {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}