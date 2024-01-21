import React from "react";
import OverviewActivityItemCard from "./OverviewActivityItemCard";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { useRouter } from "next/router";
import { RootState } from "../../states";

export default function OverviewActivities({ activityList }) {
  const isLoading : boolean = useSelector((state: RootState) => state.loading);
  const router = useRouter();

  return (
    <div className="xl:w-1/2 w-full h-fit rounded-md mt-8 xl:mt-0">
      <p className="text-sky-800 text-xl font-bold p-4 bg-white border-b-4 border-sky-800">
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
          <OverviewActivityItemCard
            key={index}
            name={item.subject}
            action={item.action}
            title={item.title}
            time={item.timestamp}
            version={item.object.version}
            draftId={item.object.draft_id}
            index={index}
          />
        );
      })}
      {activityList.length !== 0 && !isLoading && (
        <button
          onClick={() => router.push("/activities")}
          className="flex w-full justify-center pt-4 underline underline-offset-2 font-semibold text-sky-700"
        >
          Lihat Semua Aktivitas
        </button>
      )}
    </div>
  );
}
