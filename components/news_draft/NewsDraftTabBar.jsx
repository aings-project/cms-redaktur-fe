import { ArrowDownward, ArrowDropDown } from "@mui/icons-material";
import React from "react";

export default function NewsDraftTabBar() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex ">
          <div>
            <div className="flex p-4">
              <div className="bg-zinc-800 py-1 px-2 rounded-md mr-4">
                <p className="text-white text-sm font-bold">12</p>
              </div>
              <p className="text-black text-base font-normal">Baru</p>
            </div>
            <div className="h-1 w-full bg-black" />
          </div>
          <div>
            <div className="flex p-4">
              <div className="bg-zinc-800 py-1 px-2 rounded-md mr-4">
                <p className="text-white text-sm font-bold">8</p>
              </div>
              <p className="text-black text-base font-normal">Disunting</p>
            </div>
          </div>
          <div>
            <div className="flex p-4">
              <div className="bg-zinc-800 py-1 px-2 rounded-md mr-4">
                <p className="text-white text-sm font-bold">18</p>
              </div>
              <p className="text-black text-base font-normal">Disetujui</p>
            </div>
          </div>
          <div>
            <div className="flex p-4">
              <div className="bg-zinc-800 py-1 px-2 rounded-md mr-4">
                <p className="text-white text-sm font-bold">4</p>
              </div>
              <p className="text-black text-base font-normal">Ditolak</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <p className="text-black text-base font-semibold">Semua Kategori</p>
          <ArrowDropDown className="w-6 h-6 ml-2" />
        </div>
      </div>

      <div className="h-0.5 w-full bg-slate-300" />
    </div>
  );
}
