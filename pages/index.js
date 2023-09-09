import React from "react";
import MainSidebar from "../components/MainSidebar";
import OverviewLayout from "../components/OverviewLayout";

export default function Home() {
  return (
    <div className="flex">
      <MainSidebar />
      <OverviewLayout />
    </div>
  );
}
