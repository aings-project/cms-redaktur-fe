import React from "react";
import dateTimeFormatter from "../../utils/dateTimeFormatter";
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
    <div>
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
      <div className="h-0.5 bg-slate-400 mx-4" />
    </div>
  );
}
