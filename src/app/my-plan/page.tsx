"use client";

import { MyPlanContext } from "@/context/MyPlanContext";
import { ILift } from "@/types";
import { useContext, useState } from "react";
import MyPlanTab from "../components/tabs/MyPlanTab";
import SavedTab from "../components/tabs/SavedTab";
import Link from "next/link";
import { Clock, Flame, Dumbbell } from "lucide-react";

const MyPlan = () => {
  const { todaysPlan, saved } = useContext(MyPlanContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  // Select the data for the active tab
  const activeList = activeTab === "today" ? todaysPlan : saved;

  // Calculate metrics for the active tab
  const totalExercises = activeList.length;

  const totalMinutes = activeList.reduce((total, lift) => total + lift.duration, 0);

  const totalCalories = activeList.reduce((total, lift) => total + lift.caloriesBurned, 0);

  return (
    <div className="mx-auto my-5 max-w-7xl px-4 md:my-10 md:px-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">MY PLAN</h1>

        <p className="mt-3 text-sm text-gray-400">Cap of five lifts for today. Finish them, then load more.</p>
      </header>

      {/* Metrics */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Exercises */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center gap-2 text-gray-400">
            <Dumbbell size={18} />
            <p className="text-sm">Exercises</p>
          </div>

          <p className="mt-2 text-3xl font-bold text-white">{totalExercises}</p>
        </div>

        {/* Minutes */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock size={18} />
            <p className="text-sm">Minutes</p>
          </div>

          <p className="mt-2 text-3xl font-bold text-white">{totalMinutes}</p>
        </div>

        {/* Calories */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center gap-2 text-gray-400">
            <Flame size={18} />
            <p className="text-sm">Calories</p>
          </div>

          <p className="mt-2 text-3xl font-bold text-white">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex border-b border-slate-800">
        <button
          type="button"
          onClick={() => setActiveTab("today")}
          className={`cursor-pointer px-5 py-3 text-sm font-semibold transition ${
            activeTab === "today" ? "border-b-2 border-lime-400 text-lime-400" : "text-gray-400 hover:text-white"
          }`}
        >
          Today's Plan
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={`cursor-pointer px-5 py-3 text-sm font-semibold transition ${
            activeTab === "saved" ? "border-b-2 border-lime-400 text-lime-400" : "text-gray-400 hover:text-white"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Today's Plan */}
      {activeTab === "today" && (
        <div>
          {todaysPlan.length > 0 ? (
            todaysPlan.map((plan: ILift) => <MyPlanTab key={plan.id} plan={plan} />)
          ) : (
            <EmptyState />
          )}
        </div>
      )}

      {/* Saved */}
      {activeTab === "saved" && (
        <div>
          {saved.length > 0 ? (
            saved.map((savedOne: ILift) => <SavedTab key={savedOne.id} savedOne={savedOne} />)
          ) : (
            <EmptyState />
          )}
        </div>
      )}
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="py-16 text-center">
      <h2 className="text-xl font-bold text-white">NOTHING HERE YET</h2>

      <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-5 inline-block rounded-md bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default MyPlan;
