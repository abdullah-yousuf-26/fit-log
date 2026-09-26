"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const isWorkoutsActive = pathname === "/" || pathname.startsWith("/workout");
  const isPlanActive = pathname === "/my-plan";

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0c] border-b border-[#14161d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        
{/*Logo*/}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={26}
            height={26}
            className="w-6 h-6 object-contain"
            priority
          />
          <span className="text-xl font-black uppercase tracking-wider text-white font-[family-name:var(--font-oswald)]">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </Link>

{/* center nav item */}
        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-150 ${
              isWorkoutsActive
                ? "bg-[#182109] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-150 ${
              isPlanActive
                ? "bg-[#182109] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

{/* Right */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
          
{/* Plan Count */}
          <Link
            href="/my-plan"
            onClick={closeMenu}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <span className="text-gray-300">Plan</span>
            <span className="w-5 h-5 rounded-full bg-[#ccff00] text-black text-[11px] font-black flex items-center justify-center">
              {plan.length}
            </span>
          </Link>

 {/* Counter */}
          <Link
            href="/my-plan"
            onClick={closeMenu}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <span className="text-gray-300">Saved</span>
            <span className="w-5 h-5 rounded-full border border-gray-600 text-gray-300 text-[11px] font-semibold flex items-center justify-center">
              {saved.length}
            </span>
          </Link>





{/* AI generated  */}
{/* Mobile Hamburger  Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#161822] focus:outline-none"
          >
            {isMobileMenuOpen ? (
// Close Icon AI generated
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ccff00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (

 // Hamburger Icon AI generated
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>

        </div>

      </div>



{/* Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#181c26] bg-[#0d0f14] px-4 py-4 space-y-2 shadow-2xl">
          <Link
            href="/"
            onClick={closeMenu}
            className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              isWorkoutsActive
                ? "bg-[#182109] text-[#ccff00]"
                : "text-gray-300 hover:bg-[#151822] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            onClick={closeMenu}
            className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              isPlanActive
                ? "bg-[#182109] text-[#ccff00]"
                : "text-gray-300 hover:bg-[#151822] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>
      )}
    </header>
  );
}