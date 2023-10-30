import React from "react";
import OverviewActivities from "./OverviewActivities";
import OverviewSection from "./OverviewSection";
import OverviewChart from "./OverviewChart";

export default function OverviewLayout({
  newsDraftList,
  activityList,
  draftCount,
}) {
  return (
    <div className="max-w-screen-2xl mx-auto py-16 px-6 lg:px-8 bg-white">
      <p className="text-black text-3xl sm:text-4xl font-bold mb-6 hidden sm:block">
        Ikhtisar
      </p>
      <div className="flex sm:mt-10 flex-wrap xl:flex-nowrap">
        <div className="xl:max-w-4xl xl:w-3/5">
          <OverviewSection
            newsDraftList={newsDraftList}
            title="Terakhir Diubah"
          />
          <OverviewChart newsDraftCount={draftCount} />
        </div>
        <OverviewActivities activityList={activityList} />
      </div>
    </div>
  );
}
