import React from "react";
import CommentItemFromOther from "./CommentItemFromOther";
import CommentItemFromUser from "./CommentItemFromUser";
import { Send } from "@mui/icons-material";

export default function CommentContainerLayout() {
  return (
    <div className="bg-white md:bg-neutral-50 w-full md:min-w-0 md:w-3/5 lg:max-w-xl p-4 mx-auto flex flex-col md:h-full">
      <div className="overflow-y-auto md:overflow-y-hidden hover:md:overflow-y-auto">
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
