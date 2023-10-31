import React from "react";
import { AccountCircle, DateRange } from "@mui/icons-material";

export default function NewsDraftItem({
  title,
  author,
  dateTime,
  onClick,
  index,
  status,
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
          <div className="flex items-center pb-2">
            {status === "new" && (
              <p className="bg-red-500 py-0 px-2 text-center text-white rounded-md mr-2">
                Baru
              </p>
            )}
            <p className="text-black text-base font-semibold mb-2 text-left">
              {title}
            </p>
          </div>

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
