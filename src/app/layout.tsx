import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} bg-[#0d0d0d] text-white antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}