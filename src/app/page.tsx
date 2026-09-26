import { getWorkouts } from "@/lib/api";    {/*api link fetching*/}
import Hero from "@/components/Hero";
import Card from "@/components/Card"; 

export default async function Home() {
  const workouts = await getWorkouts().catch(() => []);

  return (
    <main>
      <Hero />



{/* lbrary Sce */}
      <section id="library" className="max-w-[1400px] mx-auto px-6 pt-10 pb-20">
        <h2 className="text-3xl font-bold uppercase">The Library</h2>
        <p className="text-gray-500 text-sm mt-1">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {workouts.map((workout) => (
            <Card key={workout.id} workout={workout} />
          ))}
        </div>
      </section>
    </main>
  );
}