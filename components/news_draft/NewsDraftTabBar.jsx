import React from "react";
import NewsTabBarMenuItem from "./NewsTabBarMenuItem";

export default function NewsDraftTabBar() {
  return (
    <div>
      <div className="flex items-center justify-between hover:cursor-pointer bg-slate-50 lg:bg-slate-800 flex-wrap rounded-t-md">
        <div className="hidden lg:flex">
          <NewsTabBarMenuItem title="Baru" isActive={true} />
          <NewsTabBarMenuItem title="Disunting" isActive={false} />
          <NewsTabBarMenuItem title="Menunggu Persetujuan" isActive={false} />
        </div>
        <div className="flex lg:hidden w-full bg-slate-800 px-6 justify-between">
          <select className="text-white text-base font-semibold px-4 bg-slate-800  w-full sm:w-fit">
            {["Semua Kategori"].map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          <div className="w-4" />
          <select className="text-white text-base font-semibold px-4 py-2 flex hover:cursor-pointer bg-slate-800 w-full sm:w-fit">
            {["Baru", "Disunting", "Menunggu Persetujuan"].map(
              (item, index) => {
                return <option key={index}>{item}</option>;
              }
            )}
          </select>
        </div>
      </div>

      <div className="h-0.5 w-full bg-slate-300" />
    </div>
  );
}
