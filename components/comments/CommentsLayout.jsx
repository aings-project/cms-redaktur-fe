import React from "react";
import CommentBody from "./CommentBody";
import CommentPostBody from "./CommentPostBody";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function CommentsLayout({ newsDraft, comments, onPostComment }) {
  return (
    <div className="flex bg-neutral-50 h-[calc(100dvh)] overflow-y-auto">
      <div className="flex flex-wrap md:flex-nowrap w-full">
        <CommentPostBody
          title={newsDraft.title}
          content={newsDraft.content}
          dateTime={dateTimeFormatter(newsDraft.dateTime)}
        />
        <CommentBody comments={comments} onPostComment={onPostComment} />
      </div>
    </div>
  );
}
