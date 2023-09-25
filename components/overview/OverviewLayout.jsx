import React from "react";
import OverviewComment from "./OverviewComment";
import OverviewNewsDraft from "./OverviewNewsDraft";
import OverviewReadyPublish from "./OverviewReadyPublish";

export default function OverviewLayout({ newsDraftList }) {
  return (
    <div className="py-16 ml-6 md:ml-0 md:px-16 flex-grow h-[calc(100dvh)] overflow-y-auto">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-black text-3xl sm:text-4xl font-bold mb-6 hidden sm:block">
          Ikhtisar
        </p>
        <div className="flex mt-6 sm:mt-10 flex-wrap xl:flex-nowrap">
          <div className="grow lg:max-w-7xl lg:min-w-[332px]">
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
