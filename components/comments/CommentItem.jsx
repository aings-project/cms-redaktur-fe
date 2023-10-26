import React from "react";
import dateTimeFormatter from "../../utils/dateTimeFormatter";
import useRequireAuth from "../../hooks/useRequireAuth";

export default function CommentItem({ sender, content, dateTime }) {
  const auth = useRequireAuth();
  return (
    <div className="bg-gray-700 w-full flex flex-col my-2">
      <div
        className={`flex justify-between text-white border-b-2 p-2 ${
          auth.username === sender ? "flex-row-reverse" : ""
        }`}
      >
        <p className="font-semibold text-white">{sender}</p>
        <p className="mb-2 text-sm text-white">{dateTimeFormatter(dateTime)}</p>
      </div>

      <p
        className={`text-white p-2 ${
          auth.username === sender ? "bg-sky-800" : "bg-gray-600"
        } `}
      >
        {content}
      </p>
    </div>
  );
}
