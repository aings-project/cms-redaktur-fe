import React from "react";
import NewsTabBarMenuItem from "./NewsTabBarMenuItem";
import { FilterAltTwoTone, Menu } from "@mui/icons-material";
import { reverseConvertStatus } from "../../utils/draftAttributeParser";

export default function NewsDraftTabBar({ onSetActiveStatus, status }) {
  const handleSelectChange = (event) => {
    onSetActiveStatus(reverseConvertStatus(event.target.value));
  };

  return (
    <div>
      <div className="flex items-center justify-between hover:cursor-pointer bg-white flex-wrap">
        <div className="hidden sm:flex">
          {["Draf Berita", "Publikasi Berita", "Berita Ditolak"].map(
            (item, index) => {
              return (
                <NewsTabBarMenuItem
                  key={index}
                  title={item}
                  isActive={index === 0}
                  onClick={() => {}}
                />
              );
            }
          )}
        </div>
        {/* ------- MOBILE START -------- */}
        <div className="flex flex-wrap sm:hidden w-full bg-white rounded-t-md pt-3">
          <div className="flex mr-6 mb-3">
            <Menu className="text-sky-800 mr-1" />
            <p className="text-sky-800">Menu</p>
          </div>
          <select className="text-base font-normal px-4 mb-3 pb-1 flex hover:cursor-pointer bg-white border border-neutral-400 focus:outline-sky-800 rounded-md w-full">
            {["Draft Berita", "Publikasi Berita", "Berita Ditolak"].map(
              (item, index) => {
                return <option key={index}>{item}</option>;
              }
            )}
          </select>
          <div className="flex mr-6 mb-3 mt-4">
            <FilterAltTwoTone className="text-sky-800 mr-1" />
            <p className="text-sky-800">Filter</p>
          </div>
          <div className="flex w-full">
            <select
              className="text-base font-normal px-4 mb-3 pb-1 flex hover:cursor-pointer border border-neutral-400 focus:outline-sky-800 rounded-md w-full"
              onChange={handleSelectChange}
            >
              {status.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
            <div className="w-4" />
            <select className="text-base font-normal px-4 mb-3 pb-1  border border-neutral-400 focus:outline-sky-800 rounded-md w-full">
              {["Semua Kategori"].map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          </div>
        </div>
        {/* ------- MOBILE END -------- */}
      </div>
      <div className="h-0.5 w-full bg-sky-50 sm:bg-slate-300" />
    </div>
  );
}
