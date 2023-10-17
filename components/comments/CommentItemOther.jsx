import React from "react";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function CommentItemOther({ sender, content, dateTime }) {
  return (
    <div className="bg-slate-100 p-5 rounded-e-2xl rounded-bl-xl mt-4 md:w-fit md:max-w-md w-full flex flex-col md:mr-8">
      <p className="font-semibold">{sender}</p>
      <p className="mb-2 text-sm">{dateTimeFormatter(dateTime)}</p>
      <p>{content}</p>
    </div>
  );
}
