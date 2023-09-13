import React from "react";
import { AccountCircle, DateRange } from "@mui/icons-material";

export default function OverviewNewsDraftItem({
  title,
  author,
  dateTime,
  onClick,
}) {
  return (
    <div>
      <button className="py-4 hover:cursor-pointer" onClick={onClick}>
        <p className="text-black text-base font-semibold mb-2 text-left">
          {title}
        </p>
        <div className="flex">
          <div className="flex mr-4">
            <AccountCircle className="w-4 h-4" />
            <p className="text-black text-xs font-normal ml-1">{author}</p>
          </div>
          <div className="flex">
            <DateRange className="w-4 h-4" />
            <p className="text-black text-xs font-normal ml-1">{dateTime}</p>
          </div>
        </div>
      </button>
      <div className="h-[1px] w-full bg-black" />
    </div>
  );
}