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
    <div className="py-16 px-8 bg-white">
      <ActivitiesHeader title="Log Aktivitas" />
      <div className="max-w-screen-2xl mx-auto bg-white">
        <ActivitiesBody data={activities} />
      </div>
      <Pagination
        currentPages={currentPage}
        totalPages={totalPages}
        onNext={onNextPage}
        onPrev={onPrevPage}
      />
    </div>
  );
}
