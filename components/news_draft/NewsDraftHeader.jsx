import React from "react";
import { Search } from "@mui/icons-material";

export default function NewsDraftHeader({}) {
  return (
    <div className="flex justify-between my-6 flex-wrap">
      <p className="text-black text-3xl sm:text-4xl font-bold min-w-fit mr-6 mb-6 hidden sm:block">
        Draf Berita
      </p>
      <div className="bg-white p-2 border border-zinc-300 rounded-md h-fit w-full md:w-fit">
        <div className="flex items-center justify-between">
          <input className="p-1 w-full" placeholder="Cari Judul Berita ..." />
          <Search />
        </div>
      </div>
    </div>
  );
}
