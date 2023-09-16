import React from "react";
import OverviewComment from "./OverviewComment";
import OverviewNewsDraft from "./OverviewNewsDraft";
import OverviewReadyPublish from "./OverviewReadyPublish";

export default function OverviewLayout({ newsDraftList }) {
  return (
    <div className="py-16 px-16 flex-grow h-screen overflow-y-auto">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-black text-4xl font-extrabold mb-6">Ikhtisar</p>
        <div className="flex mt-10">
          <div className="grow">
            <OverviewNewsDraft newsDraftList={newsDraftList} />
            <div className="h-8" />
            <OverviewReadyPublish newsDraftList={[]} />
          </div>
          <OverviewComment />
        </div>
      </div>
    </div>
  );
}
