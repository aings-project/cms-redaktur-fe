import React from "react";
import { AccountCircle, DateRange, MoreVert } from "@mui/icons-material";

export default function NewsDraftItem({
  title,
  author,
  dateTime,
  onClick,
  index,
}) {
  return (
    <div
      className={`flex items-center ${
        index % 2 === 1
          ? "bg-white hover:bg-sky-100"
          : "bg-sky-50 hover:bg-sky-100"
      }  px-4 lg:px-6`}
    >
      <button className="w-full flex flex-col" onClick={onClick}>
        <div className="py-4 hover:cursor-pointer">
          <p className="text-black text-base font-semibold mb-2 text-left">
            {title}
          </p>
          <div className="flex flex-wrap">
            <div className="flex mr-4 items-center mb-1">
              <AccountCircle className="w-4 h-4" />
              <p className="text-black text-xs font-normal ml-1">{author}</p>
            </div>
            <div className="flex items-center mb-1">
              <DateRange className="w-4 h-4" />
              <p className="text-black text-xs font-normal ml-1">{dateTime}</p>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-black" />
      </button>
    </div>
  );
}
