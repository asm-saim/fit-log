import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

interface ILift {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

interface LiftProps {
  lift: ILift;
}

const Lift = ({ lift }: LiftProps) => {
  return (
    <Link href={`/lift-detail/${lift.id}`} className="block">
      <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-[#15161d] hover:border-lime-300">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={lift.image}
            alt={lift.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Categories */}
          <div className="mb-4 flex gap-2">
            {lift.muscleGroups.map((muscle) => (
              <span key={muscle} className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black">
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3 className="text-lg font-extrabold uppercase text-[#FFFFFF]">{lift.name}</h3>

          {/* Equipment */}
          <p className="mt-1 text-sm text-slate-400">{lift.equipment}</p>

          {/* Divider */}
          <div className="my-4 h-px bg-slate-800" />

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock3 size={14} />
              <span>{lift.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame size={14} />
              <span>{lift.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star size={14} />
              <span>{lift.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Lift;
