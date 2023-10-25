import React from "react";
import OverviewActivities from "./OverviewActivities";
import OverviewSection from "./OverviewSection";

export default function OverviewLayout({
  newsDraftList,
  allNewsDraftList,
  activityList,
}) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <p className="text-black text-3xl sm:text-4xl font-bold mb-6 hidden sm:block">
        Ikhtisar
      </p>
      <div className="flex mt-6 sm:mt-10 flex-wrap xl:flex-nowrap">
        <div className="grow lg:max-w-7xl lg:min-w-[332px]">
          <OverviewSection
            newsDraftList={newsDraftList}
            title="Terakhir Diubah"
          />
        </div>
        <OverviewActivities activityList={activityList} />
      </div>
    </div>
  );
}
