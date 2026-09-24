import Image from "next/image";
import { Bookmark, Plus } from "lucide-react";
import { ILift } from "@/types";

interface LiftDetailProps {
  lift: ILift;
}

const LiftDetail = ({ lift }: LiftDetailProps) => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-6 rounded-xl border border-slate-800 bg-[#0f1117] p-4 sm:p-6 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-[320px] overflow-hidden rounded-lg sm:h-[400px] lg:h-[480px]">
          <Image
            src={lift.image}
            alt={lift.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">{lift.name}</h1>

          <p className="mt-2 text-sm leading-relaxed text-slate-400">{lift.description}</p>

          {/* Muscle Groups */}
          <div className="mt-3 flex flex-wrap gap-2">
            {lift.muscleGroups.map((muscle) => (
              <span key={muscle} className="rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-bold text-black">
                {muscle}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-4 overflow-hidden rounded-lg border border-slate-800 bg-[#151922]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
              <span className="text-[9px] uppercase tracking-wider text-slate-400">Equipment</span>

              <span className="text-xs text-slate-300">{lift.equipment}</span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
              <span className="text-[9px] uppercase tracking-wider text-slate-400">Difficulty</span>

              <span className="text-xs text-slate-300">{lift.difficulty}</span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
              <span className="text-[9px] uppercase tracking-wider text-slate-400">Sets</span>

              <span className="text-xs text-slate-300">{lift.sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
              <span className="text-[9px] uppercase tracking-wider text-slate-400">Reps</span>

              <span className="text-xs text-slate-300">{lift.reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
              <span className="text-[9px] uppercase tracking-wider text-slate-400">Duration</span>

              <span className="text-xs text-slate-300">{lift.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
              <span className="text-[9px] uppercase tracking-wider text-slate-400">Calories</span>

              <span className="text-xs text-slate-300">{lift.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-3 py-3">
              <span className="text-[9px] uppercase tracking-wider text-slate-400">Rating</span>

              <span className="text-xs text-slate-300">{lift.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wide text-white">Instructions</h2>

            <ol className="mt-2 space-y-2">
              {lift.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-2 text-xs leading-relaxed text-slate-400">
                  <span className="text-slate-500">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-2">
            <button className="flex items-center gap-2 rounded-md bg-lime-400 px-3 py-2 text-xs font-semibold text-black transition hover:bg-lime-300">
              <Plus size={14} />
              Add to today&apos;s plan
            </button>

            <button className="flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-xs text-slate-300 transition hover:bg-slate-800">
              <Bookmark size={14} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiftDetail;
