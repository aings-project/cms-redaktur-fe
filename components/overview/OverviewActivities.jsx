import React from "react";
import OverviewActivityItem from "./OverviewActivityItem";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function OverviewActivities({ activityList }) {
  const isLoading = useSelector((state) => state.loading);

  return (
    <div className="xl:max-w-xs w-full h-fit bg-neutral-50 border border-zinc-300 rounded-md mt-8 mr-6 xl:mr-0 xl:mt-0 shadow-md">
      <p className="text-white text-xl font-semibold p-4 bg-slate-800 rounded-t-md">
        Aktivitas Terbaru
      </p>
      {isLoading && activityList.length === 0 && (
        <div className="w-full flex justify-center mt-4">
          <ReactLoading type="spin" color="#1e293b" height={24} width={24} />
        </div>
      )}
      {activityList.length === 0 && !isLoading && (
        <p className="px-6 pt-4">Tidak ada Aktivitas</p>
      )}
      {activityList.map((item, index) => {
        return (
          <OverviewActivityItem
            key={index}
            name={item.subject}
            action={item.action}
            title={item.title}
            time={item.timestamp}
            version={item.object.version}
            draftId={item.object.draft_id}
          />
        );
      })}
    </div>
  );
}
