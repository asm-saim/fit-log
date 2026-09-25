'use client'
import { MyPlanContext } from "@/context/MyPlanContext";
import { ILift } from "@/types";
import { Plus } from "lucide-react";
import { useContext } from "react";

interface ITodaysProps {
  lift: ILift;
}

const TodaysPlan = ({ lift }: ITodaysProps) => {
  //getting the context data:
  const { todaysPlan, setTodaysPlan } = useContext(MyPlanContext);

  const handleTodaysPlan = () => {
    setTodaysPlan([...todaysPlan, lift]);
  };
  return (
    <div>
      <button
        onClick={() => handleTodaysPlan()}
        className="flex items-center gap-2 rounded-md bg-lime-400 px-3 py-2 text-xs font-semibold text-black transition hover:bg-lime-300 cursor-pointer"
      >
        <Plus size={14} />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default TodaysPlan;
