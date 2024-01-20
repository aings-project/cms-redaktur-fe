import React from "react";
import { AccountCircle, DateRange } from "@mui/icons-material";
import { convertStatus } from "../../utils/draftAttributeParser";

export default function OverviewNewsDraftItem({
  title,
  author,
  dateTime,
  onClick,
  status,
}) {
  return (
    <div className="OverviewNewsDraftItem hover:bg-slate-100 w-full px-2">
      <button className="py-4 hover:cursor-pointer " onClick={onClick}>
        <p className="text-black text-base font-semibold mb-2 text-left">
          {title}
        </p>
        <div className="flex flex-wrap">
          <div className="flex mr-4 items-center mb-1 mt-1">
            <AccountCircle className="w-4 h-4 text-sky-900" />
            <p className="text-black text-xs font-normal ml-1">{author}</p>
          </div>
          <div className="flex items-center mr-4">
            <DateRange className="w-4 h-4 text-sky-900" />
            <p className="text-black text-xs font-normal ml-1">{dateTime}</p>
          </div>
          <div className="flex items-center mb-1 mt-1">
            {status === "reviewing" && (
              <div className="p-2 rounded-full bg-amber-500 mr-1" />
            )}
            {status === "reviewed" && (
              <div className="p-2 rounded-full bg-orange-700 mr-1" />
            )}
            {status === "new" && (
              <div className="p-2 rounded-full bg-green-500 mr-1" />
            )}
            {status === "approved" && (
              <div className="p-2 rounded-full bg-green-700 mr-1" />
            )}
            {status === "published" && (
              <div className="p-2 rounded-full bg-blue-700 mr-1" />
            )}
            {status === "rejected" && (
              <div className="p-2 rounded-full bg-red-700 mr-1" />
            )}
            <p className="text-black text-xs font-normal ml-1">
              {convertStatus(status)}
            </p>
          </div>
        </div>
      </button>
      <div className="h-[1px] w-full bg-black" />
    </div>
  );
}
