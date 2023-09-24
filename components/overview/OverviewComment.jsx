import React from "react";

export default function OverviewComment() {
  return (
    <div className="xl:max-w-xs w-full h-fit bg-neutral-50 p-6 border border-zinc-300 rounded-md mt-8 mr-6 xl:mr-0 xl:mt-0">
      <p className="text-black text-2xl font-extrabold mb-4">
        Komentar Terbaru
      </p>
      <p className="text-black text-base font-normal">Belum ada komentar</p>
    </div>
  );
}
