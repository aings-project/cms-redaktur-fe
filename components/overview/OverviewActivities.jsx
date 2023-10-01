import React from "react";
import OverviewActivityItem from "./OverviewActivityItem";

export default function OverviewActivities() {
  return (
    <div className="xl:max-w-xs w-full h-fit bg-neutral-50 border border-zinc-300 rounded-md mt-8 mr-6 xl:mr-0 xl:mt-0 shadow-md">
      <p className="text-white text-xl font-semibold p-4 bg-slate-800 rounded-t-md">
        Aktivitas Terbaru
      </p>
      <div className="p-5">
        {["1", "2", "3", "4", "5"].map((item, index) => {
          return <OverviewActivityItem key={index} />;
        })}
      </div>
      {/* <p className="text-black text-base font-normal p-5">
        Belum ada aktivitas
      </p> */}
    </div>
  );
}
