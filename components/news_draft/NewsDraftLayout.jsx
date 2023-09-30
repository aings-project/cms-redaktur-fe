import React from "react";
import NewsDraftBody from "./NewsDraftBody";
import NewsDraftHeader from "./NewsDraftHeader";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";

export default function NewsDraftLayout({ listNewsDraft }) {
  return (
    <div className="py-16 px-6 md:px-16 flex-grow h-[calc(100dvh)] overflow-y-auto">
      <div className="max-w-screen-2xl mx-auto">
        <NewsDraftHeader />
        <NewsDraftBody listNewsDraft={listNewsDraft} />
        <div className="flex justify-center mt-10 items-center">
          <button className="border-2 border-slate-400 px-2 py-1 rounded-md">
            <KeyboardArrowLeftRounded className="text-slate-400" />
          </button>
          <p className="font-normal text-lg mx-4">Halaman 1 dari 3</p>
          <button className="border-2 border-black px-2 py-1 rounded-md">
            <KeyboardArrowRightRounded />
          </button>
        </div>
      </div>
    </div>
  );
}
