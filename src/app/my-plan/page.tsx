"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import { Divide } from "lucide-react";
import React, { useContext } from "react";
import MyPlanTab from "../components/tabs/MyPlanTab";
import { ILift } from "@/types";
import SavedTab from "../components/tabs/SavedTab";

const MyPlan = () => {
  const { todaysPlan, saved } = useContext(MyPlanContext);

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 my-5 md:my-10">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">MY PLAN</h1>
        <p className="mt-3 text-sm text-gray-400">Cap of five lifts for today. Finish them, then load more.</p>
      </header>

      {/* Tab section */}
      <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab" aria-label="Todays Plan" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {todaysPlan.map((plan: ILift) => (
            <MyPlanTab key={plan.id} plan={plan}></MyPlanTab>
          ))}
        </div>

        <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {saved.map((savedOne: ILift) => (
            <SavedTab key={savedOne.id} savedOne={savedOne}></SavedTab>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
