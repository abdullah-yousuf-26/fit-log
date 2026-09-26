export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        
      <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest">
        <img src="/logo.png" alt="FitLog logo" className="w-6 h-6 object-contain" />
        <span>
          FIT<span className="text-[#ccff00]">LOG</span>
        </span>
      </span>

        <p className="text-gray-600 text-xs">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

        
      </div>
    </footer>
  );
}
