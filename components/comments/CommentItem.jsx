import React from "react";
import { commentDateTimeFormatter } from "../../utils/dateTimeFormatter";
import useRequireAuth from "../../hooks/useRequireAuth";

export default function CommentItem({ sender, content, dateTime }) {
  const auth = useRequireAuth();
  return (
    <div className="bg-white w-full flex flex-col mt-4 mb-2">
      <div
        className={`flex w-full items-center mb-2 ${
          auth.username === sender ? "bg-sky-50" : ""
        }`}
      >
        <div
          className={`${
            auth.username === sender ? "bg-sky-600" : "bg-gray-800"
          } text-white  text-sm px-2 py-1 flex items-center`}
        >
          {sender.substring(0, 1).toUpperCase()}
        </div>
        <div className="h-1 w-2" />
        <div className={`flex justify-between text-white w-full items-start`}>
          <p className="text-sm font-bold text-black ">{sender}</p>
          <p className="text-sm text-black pr-4 text-end">
            {commentDateTimeFormatter(dateTime)}
          </p>
        </div>
      </div>

      <p className={`text-black text-sm`}>{content}</p>
    </div>
  );
}
