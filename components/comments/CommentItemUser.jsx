import React from "react";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function CommentItemUser({ sender, content, dateTime }) {
  return (
    <div className="flex justify-end md:ml-8">
      <div className="bg-yellow-100 rounded-s-2xl rounded-br-xl mt-4 md:w-fit p-5 w-full md:max-w-md border-yellow-200 shadow-md">
        <p className="font-semibold">{sender}</p>
        <p className="mb-2 text-sm">{dateTimeFormatter(dateTime)}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}
