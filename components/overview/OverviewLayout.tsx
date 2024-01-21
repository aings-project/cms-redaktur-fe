import React from "react";
import OverviewActivities from "./OverviewActivities";
import LastEditedSection from "./LastEditedSection";
import OverviewChart from "./OverviewChart";

export default function OverviewLayout({
  lastEdited,
  activityList,
  draftCount,
}) {
  return (
    <div className="max-w-screen-2xl mx-auto py-16 px-6 lg:px-8 bg-white">
      <p className="text-black text-3xl sm:text-4xl font-bold mb-6 hidden sm:block">
        Ikhtisar
      </p>
      <div className="flex sm:mt-10 flex-wrap xl:flex-nowrap">
        <div className="w-full">
          <LastEditedSection
            newsDraftList={lastEdited}
            title="Terakhir Diubah"
          />
          <OverviewChart newsDraftCount={draftCount} />
        </div>
        <OverviewActivities activityList={activityList} />
      </div>
    </div>
  );
}
