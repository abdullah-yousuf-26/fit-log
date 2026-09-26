import { getWorkoutById } from "@/lib/api";
import DetailActions from "@/components/DetailActions";

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  const specs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="bg-[#15171c] rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8">
{/* Image */}
        <div>
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-80 md:h-full object-cover rounded-2xl"
          />
        </div>

{/* Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold uppercase">
            {workout.name}
          </h1>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            {workout.description}
          </p>

{/* Tag */}
          <div className="flex flex-wrap gap-2 mt-4">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
              >
                {group}
              </span>
            ))}
          </div>
 {/* Key panel */}
          <div className="bg-[#0f1114] rounded-2xl mt-6 divide-y divide-white/5">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between px-5 py-3"
              >
                <span className="text-gray-500 text-xs tracking-wider">
                  {spec.label}
                </span>
                <span className="text-white text-sm">{spec.value}</span>
              </div>
            ))}
          </div>



          <h2 className="font-bold uppercase mt-8">Instructions</h2>
          <ol className="mt-4 space-y-3">
            {workout.instructions.map((step, index) => (
              <li key={index} className="flex gap-3 text-sm text-gray-400">
                <span className="text-white font-semibold shrink-0">
                  {index + 1}.
                </span>
                {step}
              </li>
            ))}
          </ol>

{/* Action button */}
          <DetailActions workout={workout} />
        </div>
      </div>
    </main>
  );
}
