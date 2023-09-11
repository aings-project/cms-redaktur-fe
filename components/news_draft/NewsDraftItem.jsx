import React from "react";
import {
  AccountCircle,
  CheckBoxOutlineBlank,
  DateRange,
} from "@mui/icons-material";

export default function NewsDraftItem({ title, author, dateTime, onClick }) {
  return (
    <div className="flex items-center">
      <div className="p-4">
        <CheckBoxOutlineBlank />
      </div>
      <button className="w-full flex flex-col" onClick={onClick}>
        <div className="py-4 hover:cursor-pointer">
          <p className="text-black text-base font-semibold mb-2">{title}</p>
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
        </div>
        <div className="h-[1px] w-full bg-black" />
      </button>
    </div>
  );
}
