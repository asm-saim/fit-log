"use client";

import { MyPlanContext } from "@/context/MyPlanContext";
import { ILift } from "@/types";
import { Plus } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ITodaysProps {
  lift: ILift;
}

const TodaysPlan = ({ lift }: ITodaysProps) => {
  const { todaysPlan, setTodaysPlan } = useContext(MyPlanContext);

  const handleTodaysPlan = () => {
    const alreadyAdded = todaysPlan.some((item) => item.id === lift.id);

    if (alreadyAdded) {
      toast.warning(`${lift.name} is already in today's plan.`);
      return;
    }

    if (todaysPlan.length >= 5) {
      toast.warning("Your plan is already full. You can add up to 5 lifts.");
      return;
    }

    setTodaysPlan((currentPlan) => [...currentPlan, lift]);

    toast.success(`${lift.name} added to today's plan.`);
  };

  const alreadyAdded = todaysPlan.some((item) => item.id === lift.id);
  const isFull = todaysPlan.length >= 5;

  return (
    <div>
      <button
        type="button"
        onClick={handleTodaysPlan}
        disabled={isFull}
        className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold transition ${
          alreadyAdded || isFull
            ? "cursor-pointer bg-gray-700 text-gray-400"
            : "cursor-pointer bg-lime-400 text-black hover:bg-lime-300"
        }`}
      >
        <Plus size={14} />
        {alreadyAdded ? "Already added" : isFull ? "Plan is full" : "Add to today's plan"}
      </button>
    </div>
  );
};

export default TodaysPlan;
