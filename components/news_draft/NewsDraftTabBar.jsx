import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
import NewsTabBarMenuItem from "./NewsTabBarMenuItem";

export default function NewsDraftTabBar() {
  return (
    <div>
      <div className="flex items-center justify-between hover:cursor-pointer">
        <div className="flex ">
          <NewsTabBarMenuItem title="Baru" isActive={true} />
          <NewsTabBarMenuItem title="Disunting" isActive={false} />
          <NewsTabBarMenuItem title="Menunggu Persetujuan" isActive={false} />
        </div>
        <div className="flex mr-4">
          <p className="text-black text-base font-semibold">Semua Kategori</p>
          <ArrowDropDown className="w-6 h-6 ml-2" />
        </div>
      </div>

      <div className="h-0.5 w-full bg-slate-300" />
    </div>
  );
}
