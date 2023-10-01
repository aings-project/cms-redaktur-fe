import React from "react";
import ActivitiesBody from "./ActivitiesBody";
import ActivitiesHeader from "./ActivitiesHeader";

export default function ActivitiesLayout({
  activities,
  onNextPage,
  onPrevPage,
}) {
  const data = [
    {
      model: "draft-berita",
      subject: "testredaktur1",
      action: "reviewed",
      title: " Informasi & klarifikasi terkait topik tugas akhir",
      timestamp: "2023-10-01T04:48:35.252Z",
      object: {
        id: 26,
        draft_id: 1,
        version: 7,
      },
    },
    {
      model: "draft-berita",
      subject: "testredaktur1",
      action: "reviewing",
      title: " Informasi & klarifikasi terkait topik tugas akhir",
      timestamp: "2023-09-30T17:40:07.231Z",
      object: {
        id: 25,
        draft_id: 1,
        version: 6,
      },
    },
    {
      model: "draft-berita",
      subject: "testredaktur1",
      action: "reviewing",
      title: "Messi Pindah ke Persija",
      timestamp: "2023-09-26T10:48:55.951Z",
      object: {
        id: 20,
        draft_id: 3,
        version: 12,
      },
    },
  ];

  return (
    <div className="py-16 px-6 md:px-16 flex-grow h-[calc(100dvh)] overflow-y-auto">
      <div>
        <ActivitiesHeader title="Log Aktivitas" />
        <div className="max-w-screen-2xl mx-auto bg-neutral-50">
          <ActivitiesBody data={data} />
        </div>
      </div>
    </div>
  );
}
