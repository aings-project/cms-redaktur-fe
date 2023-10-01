import React from "react";

export default function OverviewActivityItem({ name, time, content, onTap }) {
  return (
    <div className="border-b-2 border-b-slate-400 pb-4 mb-4">
      <p className="font-semibold">testredaktur1</p>
      <p className="mb-2 text-sm">Sabtu, 23 September 2023 14:52</p>
      <p>
        Informasi & klarifikasi terkait topik tugas akhir diubah statusnya
        menjadi Menunggu Persetujuan Wartawan
      </p>
    </div>
  );
}
