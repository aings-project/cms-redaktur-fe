import React from "react";
import CommentContainerLayout from "./CommentContainerLayout";
import CommentPostLayout from "./CommentPostLayout";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function CommentsLayout({ newsDraft }) {
  return (
    <div className="flex bg-neutral-50 h-[calc(100dvh)] overflow-y-auto">
      <div className="flex flex-wrap md:flex-nowrap w-full">
        <CommentPostLayout
          title={newsDraft.draft_berita.title}
          content={newsDraft.draft_berita.content}
          dateTime={dateTimeFormatter(newsDraft.draft_berita.created_at)}
        />
        <CommentContainerLayout />
      </div>
    </div>
  );
}
