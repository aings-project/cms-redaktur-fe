import React from "react";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function CommentItem({ sender, content, dateTime }) {
  return (
    <div className="bg-slate-100 p-5 rounded-e-2xl rounded-xl mt-4 w-full flex flex-col">
      <p className="font-semibold">{sender}</p>
      <p className="mb-2 text-sm">{dateTimeFormatter(dateTime)}</p>
      <p>{content}</p>
    </div>
  );
}
