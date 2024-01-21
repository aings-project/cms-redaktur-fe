import React from "react";
import ActivitiesBody from "./ActivitiesBody";
import ActivitiesHeader from "./ActivitiesHeader";
import Pagination from "../shared/Pagination";

export default function ActivitiesLayout({
  activities,
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) {
  return (
    <div className="max-w-screen-2xl mx-auto py-16 px-8 bg-white flex flex-col">
      <ActivitiesHeader title="Log Aktivitas" />
      <ActivitiesBody data={activities} />
      <Pagination
        currentPages={currentPage}
        totalPages={totalPages}
        onNext={onNextPage}
        onPrev={onPrevPage}
      />
    </div>
  );
}
