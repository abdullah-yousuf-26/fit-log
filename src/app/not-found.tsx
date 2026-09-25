import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-[#ccff00]">404</h1>
      <p className="text-gray-400 mt-4">Page not found.</p>
      <Link
        href="/"
        className="mt-6 bg-[#ccff00] text-black text-sm font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        GO TO HOME
      </Link>
    </main>
  );
}
