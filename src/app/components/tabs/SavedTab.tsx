"use client";

import { MyPlanContext } from "@/context/MyPlanContext";
import { ILift } from "@/types";
import { Clock, Flame, Star, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ISavedTabProps {
  savedOne: ILift;
}

const SavedTab = ({ savedOne }: ISavedTabProps) => {
  const { setSaved } = useContext(MyPlanContext);

  const handleRemove = () => {
    setSaved((currentSaved) => currentSaved.filter((item) => item.id !== savedOne.id));

    //remove
    toast.success(`${savedOne.name} removed from your saved list.`);
  };

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-xl border border-[#232732] bg-[#14171E] p-4 md:flex-row md:items-center">
      {/* Image */}
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-lg md:h-24 md:w-36">
        <Image
          src={savedOne.image}
          alt={savedOne.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 144px"
        />
      </div>

      {/* Information */}
      <div className="flex-1">
        <h2 className="text-lg font-bold font-oswald uppercase text-white">{savedOne.name}</h2>

        <p className="mt-1 text-sm text-gray-400">{savedOne.equipment}</p>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={16} className="text-lime-400" />
            {savedOne.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={16} className="text-lime-400" />
            {savedOne.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={16} className="text-lime-400" />
            {savedOne.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Link
          href={`/lift-detail/${savedOne.id}`}
          className="rounded-md border border-slate-700 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={handleRemove}
          className="flex cursor-pointer items-center justify-center rounded-md border border-slate-500/40 px-3 py-2 text-slate-400 hover:bg-red-500/10"
          aria-label={`Remove ${savedOne.name}`}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default SavedTab;
