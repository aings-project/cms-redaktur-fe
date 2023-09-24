import React from "react";

export default function OverviewComment() {
  return (
    <div className="xl:max-w-xs w-full h-fit bg-neutral-50 border border-zinc-300 rounded-md mt-8 mr-6 xl:mr-0 xl:mt-0">
      <p className="text-white text-xl font-semibold p-4 bg-slate-800">
        Aktivitas Terbaru
      </p>
      <p className="text-black text-base font-normal p-5">
        Belum ada aktivitas
      </p>
    </div>
  );
}
