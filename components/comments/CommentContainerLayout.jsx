import React from "react";
import CommentItemFromOther from "./CommentItemFromOther";
import CommentItemFromUser from "./CommentItemFromUser";
import { Send } from "@mui/icons-material";

export default function CommentContainerLayout() {
  return (
    <div className="bg-neutral-50 w-full lg:w-fit p-4 mx-auto flex flex-col h-full min-w-fit">
      <div className="overflow-y-auto">
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
