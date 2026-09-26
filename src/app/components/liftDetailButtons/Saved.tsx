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
    const alreadySaved = saved.some((item) => item.id === lift.id);

    if (alreadySaved) {
      toast.warning(`${lift.name} is already saved.`);
      return;
    }

    setSaved((currentSaved) => [...currentSaved, lift]);

    toast.success(`${lift.name} saved for later.`);
  };

  const alreadySaved = saved.some((item) => item.id === lift.id);

  return (
    <div>
      <button
        type="button"
        onClick={handleSaved}
        className={`flex items-center gap-2 rounded-md border px-3 py-2 text-xs transition ${
          alreadySaved
            ? "cursor-pointer border-slate-800 bg-slate-800 text-slate-500"
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
