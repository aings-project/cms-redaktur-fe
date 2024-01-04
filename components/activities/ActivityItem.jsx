import React from "react";
import { dateTimeFormatter } from "../../utils/dateTimeFormatter";
import { activityActionParserShort } from "../../utils/activityActionParser";
import { useRouter } from "next/router";

export default function ActivityItem({
  name,
  time,
  title,
  action,
  draftId,
  version,
  index,
}) {
  const router = useRouter();

  return (
    <div className="ActivityItem flex">
      {action === "rejected" && <div className="bg-red-500 px-1" />}
      {action === "new" && <div className="bg-green-500 px-1" />}
      {action === "with_data" && <div className="bg-blue-200 px-1" />}
      {action === "without_data" && <div className="bg-blue-200 px-1" />}
      {action === "reviewing" && <div className="bg-amber-500 px-1" />}
      {action === "reviewed" && <div className="bg-orange-500 px-1" />}
      {action === "comment" && <div className="bg-slate-500 px-1" />}
      {action === "approved" && <div className="bg-green-700 px-1" />}
      {action === "published" && <div className="bg-blue-500 px-1" />}

      <button
        className={`text-left hover:bg-sky-100 p-5 w-full ${
          index % 2 === 1 ? "bg-sky-50" : "bg-white"
        }`}
        onClick={() => {
          router.push(`/news_draft/edit/${draftId}/${version}`);
        }}
      >
        <p className="font-semibold">{name}</p>
        <p className="mb-2 text-sm">{dateTimeFormatter(time)}</p>
        <p>
          {activityActionParserShort(action)} {title}
        </p>
      </button>
    </div>
  );
}
