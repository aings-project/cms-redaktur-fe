import React from "react";
import CommentBody from "./CommentBody";
import CommentPostBody from "./CommentPostBody";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function CommentsLayout({ newsDraft, onPostComment, id }) {
  return (
    <div className="flex bg-neutral-50 h-[calc(100dvh)] overflow-y-auto">
      <div className="flex flex-wrap md:flex-nowrap w-full">
        <CommentPostBody
          title={newsDraft.title}
          content={newsDraft.content}
          dateTime={dateTimeFormatter(newsDraft.dateTime)}
        />
        <CommentBody onPostComment={onPostComment} id={id} />
      </div>
    </div>
  );
}
