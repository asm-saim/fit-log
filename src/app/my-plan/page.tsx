"use client";

import { MyPlanContext } from "@/context/MyPlanContext";
import { ILift } from "@/types";
import { useContext, useState } from "react";
import MyPlanTab from "../components/tabs/MyPlanTab";
import SavedTab from "../components/tabs/SavedTab";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const MyPlan = () => {
  const { todaysPlan, saved } = useContext(MyPlanContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

  // Select current tab data
  const activeList = activeTab === "today" ? todaysPlan : saved;

  // Calculate stats
  const totalExercises = activeList.length;

  const totalMinutes = activeList.reduce((total, lift) => total + lift.duration, 0);

  const totalCalories = activeList.reduce((total, lift) => total + lift.caloriesBurned, 0);

  // Sort without changing the original context array
  const sortedList = [...activeList].sort((a, b) => {
    if (sortBy === "duration") {
      return b.duration - a.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  return (
    <div className="mx-auto my-5 max-w-7xl px-4 md:my-10 md:px-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-oswald font-bold tracking-tight md:text-3xl">MY PLAN</h1>

        <p className="mt-3 text-sm text-gray-400">Cap of five lifts for today. Finish them, then load more.</p>
      </header>

      {/* Stats */}
      <div className="mb-4 grid grid-cols-3 overflow-hidden rounded-xl border border-slate-600 bg-[#232732]">
        {/* Exercises */}
        <div className="relative px-4 py-4 md:px-6 md:py-8">
          <span className="absolute right-0 top-4 bottom-4 w-px bg-slate-600 md:top-8 md:bottom-8" />

          <p className="text-[9px] uppercase tracking-wide text-[#8A92A0] md:text-xs">Exercises</p>

          <p className="mt-1 font-oswald text-xl font-bold text-[#CCFF00] md:text-4xl">{totalExercises}</p>
        </div>

        {/* Minutes */}
        <div className="relative px-4 py-4 md:px-6 md:py-8">
          <span className="absolute right-0 top-4 bottom-4 w-px bg-slate-600 md:top-8 md:bottom-8" />

          <p className="text-[9px] uppercase tracking-wide text-[#8A92A0] md:text-xs">Minutes</p>

          <p className="mt-1 font-oswald text-xl font-bold text-white md:text-4xl">{totalMinutes}</p>
        </div>

        {/* Calories */}
        <div className="px-4 py-4 md:px-6 md:py-8">
          <p className="text-[9px] uppercase tracking-wide text-[#8A92A0] md:text-xs">Calories</p>

          <p className="mt-1 font-oswald text-xl font-bold text-white md:text-4xl">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mb-3 md:my-5 flex items-center justify-between gap-3">
        {/* Tabs */}
        <div className="flex rounded-xl border border-slate-800 bg-[#151921] p-0.5 md:p-1">
          <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-[10px] md:text-xs transition ${
              activeTab === "today" ? "bg-[#2B303D] text-white" : "text-[#8A92A0] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-[10px] md:text-xs transition ${
              activeTab === "saved" ? "bg-[#2B303D] text-white" : "text-[#8A92A0] hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-500 md:text-xs">Sort By</span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
              className="cursor-pointer appearance-none rounded-md border border-slate-800 bg-[#12151b] py-1.5 pl-2 pr-7 text-[10px] text-slate-300 outline-none md:text-xs"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Workout List */}
      {sortedList.length > 0 ? (
        <div className="space-y-3">
          {activeTab === "today"
            ? sortedList.map((plan: ILift) => <MyPlanTab key={plan.id} plan={plan} />)
            : sortedList.map((savedOne: ILift) => <SavedTab key={savedOne.id} savedOne={savedOne} />)}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="flex min-h-[140px] items-center justify-center rounded-lg border border-dashed border-slate-700 px-4 mt-10 md:mt-1 py-8 md:py-14 text-center">
      <div>
        <h2 className=" font-bold font-oswald text-white text-xs md:text-[25px]">NOTHING HERE YET</h2>

        <p className="mx-auto mt-2 max-w-md text-[9px] md:text-xs text-slate-500 ">
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href="/"
          className="mt-4 inline-block rounded-full bg-lime-400 px-4 py-2 text-[9px] md:text-[12px] font-semibold text-black transition hover:bg-lime-300"
        >
          Go to workouts
        </Link>
      </div>
    </div>
  );
};

export default MyPlan;
