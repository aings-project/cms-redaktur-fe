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
    <div className="py-16 px-6 md:px-16 flex-grow h-[calc(100dvh)] overflow-y-auto">
      <div>
        <ActivitiesHeader title="Log Aktivitas" />
        <div className="max-w-screen-2xl mx-auto bg-neutral-50">
          <ActivitiesBody data={activities} />
        </div>
        <Pagination
          currentPages={currentPage}
          totalPages={totalPages}
          onNext={onNextPage}
          onPrev={onPrevPage}
        />
      </div>
    </div>
  );
}