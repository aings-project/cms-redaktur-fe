import React from "react";
import MainSidebar from "../../components/main/MainSidebar";
import OverviewLayout from "../../components/overview/OverviewLayout";

export default function Overview() {
  return (
    <div className="flex">
      <MainSidebar activePage="ikhtisar" />
      <OverviewLayout />
    </div>
  );
}
