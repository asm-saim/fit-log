'use client'
import { MyPlanContext } from "@/context/MyPlanContext";
import { ILift } from "@/types";
import { Bookmark } from "lucide-react";
import { useContext } from "react";

interface ISavedProps {
  lift: ILift;
}

const Saved = ({ lift }: ISavedProps) => {
  //getting the context data:
  const { saved, setSaved } = useContext(MyPlanContext);

  const handleSaved = () => {
    // console.log("readList is clicked", book);
    setSaved([...saved, lift]);
  };
  return (
    <div>
      <button
        onClick={() => handleSaved()}
        className="flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-xs text-slate-300 transition hover:bg-slate-800 cursor-pointer"
      >
        <Bookmark size={14} />
        Save for later
      </button>
    </div>
  );
};

export default Saved;
