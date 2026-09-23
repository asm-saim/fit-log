"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import dumble from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isWorkoutActive = pathname === "/workout";
  const isMyPlanActive = pathname === "/myplan";
  const isSavedActive = pathname === "/saved";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0f12]/90 backdrop-blur-xl">
      {" "}
      <div className="mx-auto flex h-[70px] max-w-7xl items-center px-4 lg:px-6">
        {/* Logo */}{" "}
        <div className="flex-1">
          {" "}
          <Link
            href="/"
            className="flex w-fit items-center gap-2 text-xl font-semibold font-oswald"
            onClick={closeMenu}
          >
            {" "}
            <Image src={dumble} alt="FitLog logo" width={28} height={28} /> <span className="text-xl">FITLOG</span>{" "}
          </Link>{" "}
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          <Link
            href="/workout"
            className={`rounded-full px-5 py-[6px] text-sm transition-colors ${
              isWorkoutActive ? "bg-[#1A2312] font-semibold text-[#C2F800]" : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/myplan"
            className={`rounded-full px-5 py-[6px] text-sm transition-colors ${
              isMyPlanActive ? "bg-[#1A2312] font-semibold text-[#C2F800]" : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>
        {/* Desktop Right Side */}
        <div className="hidden flex-1 justify-end lg:flex">
          <div className="flex items-center gap-5 text-sm">
            {/* Plan */}
            <Link href="/myplan" className="flex items-center gap-2 text-white/80 hover:text-white">
              <span>Plan</span>

              <span className="flex size-6 items-center justify-center rounded-full bg-[#C2F800] font-semibold text-black">
                0
              </span>
            </Link>

            {/* Saved */}
            <Link href="/saved" className="flex items-center gap-2 text-white/80 hover:text-white">
              <span>Saved</span>

              <span className="flex size-6 items-center justify-center rounded-full border border-white/30 font-semibold">
                0
              </span>
            </Link>
          </div>
        </div>
        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0d0f12] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              href="/workout"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                isWorkoutActive
                  ? "bg-[#1A2312] font-semibold text-[#C2F800]"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/myplan"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                isMyPlanActive
                  ? "bg-[#1A2312] font-semibold text-[#C2F800]"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              My Plan
            </Link>

            <Link
              href="/myplan"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              <span>Plan</span>

              <span className="flex size-6 items-center justify-center rounded-full bg-[#C2F800] font-semibold text-black">
                0
              </span>
            </Link>
            
            <Link
              href="/saved"
              onClick={closeMenu}
              className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm transition-colors ${
                isSavedActive
                  ? "bg-[#1A2312] font-semibold text-[#C2F800]"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>Saved</span>

              <span className="flex size-6 items-center justify-center rounded-full border border-white/30 font-semibold">
                0
              </span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
