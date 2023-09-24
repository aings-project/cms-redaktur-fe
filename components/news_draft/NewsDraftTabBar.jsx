import React from "react";
import NewsTabBarMenuItem from "./NewsTabBarMenuItem";

export default function NewsDraftTabBar() {
  return (
    <div>
      <div className="flex items-center justify-between hover:cursor-pointer bg-slate-50 lg:bg-yellow-500 flex-wrap">
        <div className="hidden lg:flex">
          <NewsTabBarMenuItem title="Baru" isActive={true} />
          <NewsTabBarMenuItem title="Disunting" isActive={false} />
          <NewsTabBarMenuItem title="Menunggu Persetujuan" isActive={false} />
        </div>
        <div className="flex lg:hidden w-full bg-yellow-500 px-6">
          <p className="w-1/2 py-2 px-4 font-bold min-w-fit">Status Berita</p>
          <select className="text-black text-base font-semibold px-4 py-2 flex hover:cursor-pointer w-full bg-yellow-500">
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
