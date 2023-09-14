import React from "react";

export default function OverviewComment() {
  return (
    <div className="max-w-xs w-full h-fit bg-neutral-50 p-6 border border-zinc-300 rounded-md">
      <p className="text-black text-2xl font-extrabold mb-4">
        Komentar Terbaru
      </p>
      <p className="text-black text-base font-normal">Belum ada komentar</p>
    </div>
  );
}
