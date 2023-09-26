import React from "react";
import NewsTabBarMenuItem from "./NewsTabBarMenuItem";
import {
  Filter,
  Filter1,
  FilterAlt,
  FilterAltTwoTone,
} from "@mui/icons-material";

export default function NewsDraftTabBar() {
  return (
    <div>
      <div className="flex items-center justify-between hover:cursor-pointer bg-slate-50 lg:bg-slate-800 flex-wrap rounded-t-md">
        <div className="hidden lg:flex">
          <NewsTabBarMenuItem title="Baru" isActive={true} />
          <NewsTabBarMenuItem title="Disunting" isActive={false} />
          <NewsTabBarMenuItem title="Menunggu Persetujuan" isActive={false} />
        </div>
        <div className="flex flex-wrap lg:hidden w-full bg-slate-800 px-6 pt-3">
          <div className="flex  mr-6 mb-3">
            <FilterAltTwoTone className="text-white mr-1" />
            <p className="text-white">Filter</p>
          </div>
          <div className="flex">
            <select className="text-white text-base font-normal px-4 mb-3 pb-1 flex hover:cursor-pointer bg-slate-800 border border-white rounded-md w-full">
              {["Baru", "Disunting", "Menunggu Persetujuan"].map(
                (item, index) => {
                  return <option key={index}>{item}</option>;
                }
              )}
            </select>
            <div className="w-4" />
            <select className="text-white text-base font-normal px-4 mb-3 pb-1 bg-slate-800 border border-white rounded-md w-full">
              {["Semua Kategori"].map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="h-0.5 w-full bg-slate-300" />
    </div>
  );
}
