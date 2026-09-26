"use client";

import { MyPlanContext } from "@/context/MyPlanContext";
import { ILift } from "@/types";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";

interface IMyPlanTabProps {
  plan: ILift;
}

const MyPlanTab = ({ plan }: IMyPlanTabProps) => {
  const { setTodaysPlan } = useContext(MyPlanContext);

  const handleRemove = () => {
    setTodaysPlan((currentPlan) => currentPlan.filter((item) => item.id !== plan.id));
    
    //remove
    toast.success(`${plan.name} removed from your plan.`);
  };

  const handleMark = () => {
    //mark as done
    toast.success(`${plan.name} marked as done!`);
  };

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-xl border border-[#232732] bg-[#14171E] p-4 md:flex-row md:items-center">
      {/* Image */}
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-lg md:h-24 md:w-36">
        <Image src={plan.image} alt={plan.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 144px" />
      </div>

      {/* Information */}
      <div className="flex-1">
        <h2 className="text-lg font-oswald font-bold uppercase text-white">{plan.name}</h2>

        <p className="mt-1 text-sm text-gray-400">{plan.equipment}</p>

        {/* Stats */}
        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={16} className="text-lime-400" />
            {plan.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={16} className="text-lime-400" />
            {plan.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={16} className="text-lime-400" />
            {plan.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Link
          href={`/lift-detail/${plan.id}`}
          className="rounded-md border border-slate-700 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
        >
          View Details
        </Link>

        <button
          onClick={() => handleMark()}
          type="button"
          className="flex items-center gap-1 rounded-md bg-lime-400 px-3 py-2 text-xs font-semibold text-black hover:bg-lime-300"
        >
          <Check size={14} />
          Mark as Done
        </button>

        <button
          type="button"
          onClick={handleRemove}
          className="flex cursor-pointer items-center justify-center rounded-md border border-slate-500/40 px-3 py-2 text-slate-400 hover:bg-red-500/10"
          aria-label={`Remove ${plan.name}`}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default MyPlanTab;
