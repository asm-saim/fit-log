"use client";

import { MyPlanContext } from "@/context/MyPlanContext";
import { ILift } from "@/types";
import { Plus } from "lucide-react";
import { useContext } from "react";

interface ITodaysProps {
  lift: ILift;
}

const TodaysPlan = ({ lift }: ITodaysProps) => {
  const { todaysPlan, setTodaysPlan } = useContext(MyPlanContext);

  const handleTodaysPlan = () => {
    // Prevent duplicate lifts
    const alreadyAdded = todaysPlan.some((item) => item.id === lift.id);

    if (alreadyAdded) {
      return;
    }

    // Maximum 5 lifts
    if (todaysPlan.length >= 5) {
      return;
    }

    setTodaysPlan((currentPlan) => [...currentPlan, lift]);
  };

  const alreadyAdded = todaysPlan.some((item) => item.id === lift.id);
  const isFull = todaysPlan.length >= 5;

  return (
    <div>
      <button
        type="button"
        onClick={handleTodaysPlan}
        disabled={alreadyAdded || isFull}
        className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold transition ${
          alreadyAdded || isFull
            ? "cursor-not-allowed bg-gray-700 text-gray-400"
            : "bg-lime-400 text-black hover:bg-lime-300"
        }`}
      >
        <Plus size={14} />

        {alreadyAdded ? "Already added" : isFull ? "Plan is full" : "Add to today's plan"}
      </button>
    </div>
  );
};

export default TodaysPlan;
