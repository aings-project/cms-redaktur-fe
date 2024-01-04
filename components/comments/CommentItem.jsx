import React, { useState } from "react";
import { commentDateTimeFormatter } from "../../utils/dateTimeFormatter";
import useRequireAuth from "../../hooks/useRequireAuth";

export default function CommentItem({ sender, content, dateTime }) {
  const auth = useRequireAuth();
  const clipped = content.length > 300;
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="CommentItem bg-white w-full flex flex-col mt-4 mb-2">
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
      {!clipped && <p className={`text-black text-sm`}>{content}</p>}
      {clipped && (
        <div>
          <p className={`text-black text-sm`}>
            {readMore ? content : `${content.substring(0, 300)} ...`}
          </p>
          <button
            className="text-sm text-sky-600 bg-sky-50"
            onClick={handleReadMore}
          >
            <p>{readMore ? "Baca Lebih Sedikit" : "Baca Selengkapnya"}</p>
          </button>
        </div>
      )}
    </div>
  );
}
