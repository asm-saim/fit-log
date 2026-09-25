'use client'
import { ILift } from "@/types";
import { createContext, useState } from "react";

interface ILiftContext {
  todaysPlan: ILift[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<ILift[]>>;
  saved: ILift[];
  setSaved: React.Dispatch<React.SetStateAction<ILift[]>>;
}

export const MyPlanContext = createContext<ILiftContext>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const MyPlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<ILift[]>([]);
  const [saved, setSaved] = useState<ILift[]>([]);

  const sharedData: ILiftContext = {
    todaysPlan,
    setTodaysPlan,
    saved,
    setSaved,
  };
  return <MyPlanContext.Provider value={sharedData}>{children}</MyPlanContext.Provider>;
};

export default MyPlanProvider;
