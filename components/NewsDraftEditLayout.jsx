import React from "react";
import NewsDraftEditSidebar from "./NewsDraftEditSidebar";

export default function NewsDraftEditLayout() {
  return (
    <div className="bg-slate-50 h-screen overflow-y-auto">
      <div className="flex">
        <div className="p-6 w-full">
          <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
          <input
            className="w-full bg-slate-50 mb-2 text-2xl font-semibold"
            value={
              "Pencemaran Udara di Daerah Jabodetabek Semakin Parah! Tercatat 1440 balita"
            }
          />
          <div className="h-0.5 w-full bg-black" />
        </div>
        <NewsDraftEditSidebar />
      </div>
    </div>
  );
}
