import React from "react";
import OverviewComment from "./OverviewComment";
import OverviewNewsDraft from "./OverviewNewsDraft";
import OverviewReadyPublish from "./OverviewReadyPublish";

export default function OverviewLayout({ newsDraftList }) {
  return (
    <div className="py-16 ml-6 md:ml-0 md:px-16 flex-grow h-screen overflow-y-auto">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-black text-4xl font-extrabold mb-6">Ikhtisar</p>
        <div className="flex mt-10 flex-wrap xl:flex-nowrap">
          <div className="grow md:max-w-fit lg:max-w-7xl lg:min-w-[332px]">
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
