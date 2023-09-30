import React from "react";
import NewsTabBarMenuItem from "./NewsTabBarMenuItem";
import { FilterAltTwoTone } from "@mui/icons-material";
import { reverseConvertStatus } from "../../utils/draftAttributeParser";

export default function NewsDraftTabBar({
  activeStatus,
  onSetActiveStatus,
  status,
}) {
  const handleSelectChange = (event) => {
    onSetActiveStatus(reverseConvertStatus(event.target.value));
  };

  return (
    <div>
      <div className="flex items-center justify-between hover:cursor-pointer bg-slate-50 lg:bg-slate-800 flex-wrap rounded-t-md">
        <div className="hidden lg:flex">
          {status.map((item, index) => {
            return (
              <NewsTabBarMenuItem
                key={index}
                title={item}
                isActive={activeStatus === item}
                onClick={() => {
                  onSetActiveStatus(reverseConvertStatus(item));
                }}
              />
            );
          })}
        </div>
        <div className="flex flex-wrap lg:hidden w-full bg-slate-800 px-6 pt-3">
          <div className="flex  mr-6 mb-3">
            <FilterAltTwoTone className="text-white mr-1" />
            <p className="text-white">Filter</p>
          </div>
          <div className="flex">
            <select
              className="text-white text-base font-normal px-4 mb-3 pb-1 flex hover:cursor-pointer bg-slate-800 border border-white rounded-md w-full"
              onChange={handleSelectChange}
            >
              {status.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
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
