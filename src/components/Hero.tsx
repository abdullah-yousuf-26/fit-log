import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 pt-8 pb-6">
      <div className="bg-[#15171c] rounded-3xl px-8 py-12 md:px-14 md:py-16 grid md:grid-cols-2 gap-10 items-center">


{/* Text */}
        <div>
          <p className="text-[#ccff00] text-xs tracking-[0.3em] mb-5 font-medium">
            WORKOUT LIBRARY
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.02]">
            Train with Intent. Log Every Set.
          </h1>
          <p className="text-gray-400 mt-6 max-w-md text-sm leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>
          <a
            href="#library"
            className="inline-flex items-center gap-2 mt-8 bg-[#ccff00] text-black text-sm font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            <FaArrowRight className="text-xs" /> BROWSE WORKOUTS
          </a>
        </div>



{/* Right side image */}
        <div className="relative">
          <img
            src="/banner.png"
            alt="Athlete training"
            className="w-full max-w-lg mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}