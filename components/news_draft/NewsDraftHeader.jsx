import React from "react";
import { Search } from "@mui/icons-material";

export default function NewsDraftHeader({ title }) {
  return (
    <div className="flex justify-between mb-5 lg:mb-0 flex-wrap">
      <p className="text-black text-3xl sm:text-4xl font-bold min-w-fit mr-6 mb-5 hidden sm:block">
        {title}
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
