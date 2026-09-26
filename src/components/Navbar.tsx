"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const links = [
    { href: "/", label: "Workouts" },
    { href: "/my-plan", label: "My Plan" },
  ];

  return (
    <header className="border-b border-white/5 relative">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">



{/*Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="FitLog logo" className="w-6 h-6 object-contain" />
          <span className="text-lg font-bold tracking-widest">FITLOG</span>
        </Link>



{/*Links */}
        <ul className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "px-4 py-1.5 rounded-full bg-[#1f2712] text-[#ccff00] text-sm font-semibold"
                      : "px-4 py-1.5 text-gray-500 hover:text-white text-sm transition"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>




{/*badges counts */}
        <div className="flex items-center gap-5 text-sm">
          <span className="text-gray-300">
            Plan
            <span className="ml-1.5 inline-flex items-center justify-center bg-[#ccff00] text-black text-xs font-bold min-w-[22px] h-[22px] px-1.5 rounded-full">
              {plan.length}
            </span>
          </span>
          <span className="text-gray-300">
            Saved
            <span className="ml-1.5 inline-flex items-center justify-center bg-[#ccff00] text-black text-xs font-bold min-w-[22px] h-[22px] px-1.5 rounded-full">
              {saved.length}
            </span>
          </span>
        </div>
      </nav>
    </header>
  );
}