import React from "react";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";

export default function Pagination({
  currentPages,
  totalPages,
  onNext,
  onPrev,
}) {
  return (
    <div className="flex justify-center mt-10 items-center">
      <button
        disabled={currentPages === 1}
        className={`border-2 ${
          currentPages === 1 ? "border-slate-400" : "border-black"
        } px-2 py-1 rounded-md`}
        onClick={() => onPrev(parseInt(currentPages) - 1)}
      >
        <KeyboardArrowLeftRounded
          className={`${currentPages === 1 ? "text-slate-400" : "text-black"}`}
        />
      </button>
      <p className="font-normal text-lg mx-4">
        Halaman {currentPages} dari {totalPages}
      </p>
      <button
        // disabled={currentPages === totalPages}
        className={`border-2 ${
          currentPages === totalPages ? "border-slate-400" : "border-black"
        } px-2 py-1 rounded-md`}
        onClick={() => onNext(parseInt(currentPages) + 1)}
      >
        <KeyboardArrowRightRounded
          className={`${
            currentPages === totalPages ? "text-slate-400" : "text-black"
          }`}
        />
      </button>
    </div>
  );
}
