import React from "react";
import dateTimeFormatter from "../../utils/dateTimeFormatter";
import activityActionParser from "../../utils/activityActionParser";

export default function OverviewActivityItem({
  name,
  time,
  title,
  action,
  onTap,
}) {
  return (
    <div className="border-b-2 border-b-slate-400 pb-4 mb-4">
      <p className="font-semibold">{name}</p>
      <p className="mb-2 text-sm">{dateTimeFormatter(time)}</p>
      <p>
        {title} {activityActionParser(action)}
      </p>
    </div>
  );
}
