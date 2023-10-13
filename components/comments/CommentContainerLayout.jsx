import React from "react";
import CommentItemFromOther from "./CommentItemFromOther";
import CommentItemFromUser from "./CommentItemFromUser";
import { Send } from "@mui/icons-material";

export default function CommentContainerLayout() {
  return (
    <div className="bg-white md:bg-slate-800 w-full md:min-w-0 md:w-3/5 lg:max-w-xl px-6 md:px-4 mx-auto flex flex-col md:h-full">
      <p className="font-semibold text-xl md:hidden">Komentar</p>
      <div className="overflow-y-auto lg:overflow-y-hidden hover:lg:overflow-y-auto">
        <CommentItemFromOther />
        <CommentItemFromUser />
        <CommentItemFromOther />
        <CommentItemFromOther />
        <CommentItemFromOther />
      </div>
      <div className="mt-2 w-full bg-neutral-100 rounded-md border-2 border-neutral-300 flex items-center pr-4">
        <input
          placeholder="Berikan komentar..."
          className="bg-neutral-100 p-4 w-full"
        />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
}
