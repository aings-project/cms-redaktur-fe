import React from "react";
import dateTimeFormatter from "../../utils/dateTimeFormatter";
import useRequireAuth from "../../hooks/useRequireAuth";

export default function CommentItem({ sender, content, dateTime }) {
  const auth = useRequireAuth();
  return (
    <div className="bg-gray-700 w-full flex flex-col mt-4 mb-2">
      <div
        className={`flex w-full items-center mb-2 ${
          auth.username === sender ? "bg-gray-600" : ""
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
          <p className="text-sm font-bold text-white ">{sender}</p>
          <p className="text-sm text-white pr-4">
            {dateTimeFormatter(dateTime)}
          </p>
        </div>
      </div>

      <p className={`text-white text-sm`}>{content}</p>
    </div>
  );
}
