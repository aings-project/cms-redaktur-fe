import React from "react";
import OverviewComment from "./OverviewComment";
import OverviewNewsDraft from "./OverviewNewsDraft";
import OverviewReadyPublish from "./OverviewReadyPublish";

export default function OverviewLayout() {
  return (
    <div className="bg-neutral-50 py-16 px-16 flex-grow h-screen overflow-y-auto">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-black text-4xl font-extrabold mb-6">
          AINGS - Ikhtisar
        </p>
        <div className="flex">
          <div>
            <OverviewNewsDraft />
            <div className="h-8" />
            <OverviewReadyPublish />
          </div>
          <OverviewComment />
        </div>
      </div>
    </div>
  );
}
