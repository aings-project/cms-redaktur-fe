import React from "react";
import CommentContainerLayout from "./CommentContainerLayout";
import CommentPostLayout from "./CommentPostLayout";

export default function CommentsLayout({}) {
  return (
    <div className="flex bg-neutral-50 h-[calc(100dvh)] overflow-y-auto">
      <div className="flex flex-wrap lg:flex-nowrap w-full">
        <CommentPostLayout />
        <CommentContainerLayout />
      </div>
    </div>
  );
}
