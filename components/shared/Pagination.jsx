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
    <div
      className={`justify-center sm:justify-end mt-10 items-center ${
        totalPages === 1 ? "hidden" : "flex"
      }`}
    >
      <button
        disabled={currentPages === 1}
        className={`border-2 ${
          currentPages === 1 ? "border-slate-400" : "border-sky-800"
        } px-1 py-0.5 rounded-md`}
        onClick={() => onPrev(parseInt(currentPages) - 1)}
      >
        <KeyboardArrowLeftRounded
          className={`${
            currentPages === 1 ? "text-slate-400" : "text-sky-800"
          }`}
        />
      </button>
      <p className="font-normal mx-4">
        Halaman {currentPages} dari {totalPages}
      </p>
      <button
        disabled={currentPages === totalPages}
        className={`border-2 ${
          currentPages === totalPages
            ? "border-slate-400"
            : "border-sky-800 hover:bg-sky-100"
        } px-1 py-0.5 rounded-md`}
        onClick={() => onNext(parseInt(currentPages) + 1)}
      >
        <KeyboardArrowRightRounded
          className={`${
            currentPages === totalPages ? "text-slate-400" : "text-sky-800"
          }`}
        />
      </button>
    </div>
  );
}
