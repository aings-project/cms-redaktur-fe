import React from "react";
import CommentContainerLayout from "./CommentContainerLayout";
import CommentPostLayout from "./CommentPostLayout";

export default function CommentsLayout({ newsDraft }) {
  return (
    <div className="flex bg-neutral-50 h-[calc(100dvh)] overflow-y-auto">
      <div className="flex flex-wrap lg:flex-nowrap w-full">
        <CommentPostLayout title={newsDraft.draft_berita.title} />
        <CommentPostLayout title={newsDraft.draft_berita.content} />
        <CommentContainerLayout />
      </div>
    </div>
  );
}
