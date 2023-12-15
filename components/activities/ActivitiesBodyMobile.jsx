import React from "react";
import ActivityItem from "./ActivityItem";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

export default function ActivitiesBodyMobile(data) {
  const isLoading = useSelector((state) => state.loading);

  return (
    <div className="rounded-b-md border-2 pb-4">
      {data.map((item, index) => {
        return (
          <ActivityItem
            key={index}
            name={item.subject}
            action={item.action}
            title={item.title}
            time={item.timestamp}
            draftId={item.object.draft_id}
            version={item.object.version}
            index={index}
          />
        );
      })}
      {isLoading && (
        <div className="w-full flex justify-center mt-4 lg:mt-0">
          <ReactLoading type="spin" color="#1e293b" height={24} width={24} />
        </div>
      )}
    </div>
  );
}
