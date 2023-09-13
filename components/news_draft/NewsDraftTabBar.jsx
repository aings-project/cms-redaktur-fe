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
        <select className="text-black text-base font-semibold mx-4 px-4 py-2">
          {["Semua Kategori", "Politik", "Olahraga"].map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>

      <div className="h-0.5 w-full bg-slate-300" />
    </div>
  );
}
