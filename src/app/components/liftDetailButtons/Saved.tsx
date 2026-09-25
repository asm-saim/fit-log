"use client";

import { MyPlanContext } from "@/context/MyPlanContext";
import { ILift } from "@/types";
import { Bookmark } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ISavedProps {
  lift: ILift;
}

const Saved = ({ lift }: ISavedProps) => {
  const { saved, setSaved } = useContext(MyPlanContext);

  const handleSaved = () => {
    setSaved((currentSaved) => {
      // Don't save the same lift twice
      const alreadySaved = currentSaved.some((item) => item.id === lift.id);

      if (alreadySaved) {
        return currentSaved;
      }
      return [...currentSaved, lift];
    });
    //react toast:
    toast.success(`${lift.name} saved for later.`);
  };

  const alreadySaved = saved.some((item) => item.id === lift.id);

  return (
    <div>
      <button
        type="button"
        onClick={handleSaved}
        disabled={alreadySaved}
        className={`flex items-center gap-2 rounded-md border px-3 py-2 text-xs transition ${
          alreadySaved
            ? "cursor-not-allowed border-slate-800 bg-slate-800 text-slate-500"
            : "cursor-pointer border-slate-700 text-slate-300 hover:bg-slate-800"
        }`}
      >
        <Bookmark size={14} />
        {alreadySaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default Saved;
