import React from "react";
import OverviewActivities from "./OverviewActivities";
import OverviewSection from "./OverviewSection";
import { PieChart } from "react-minimal-pie-chart";
import OverviewChart from "./OverviewChart";

export default function OverviewLayout({ newsDraftList, activityList }) {
  const defaultLabelStyle = {
    fontSize: "6px",
    fontFamily: "sans-serif",
    fill: "#FFF",
    fontWeight: "bold",
  };
  const data = [
    { title: "Baru", color: "#0074e4", value: 10 },
    { title: "Ditolak", color: "#e60000", value: 10 },
    { title: "Disunting", color: "#4caf50", value: 10 },
    { title: "Menunggu Wartawan", color: "#9c27b0", value: 10 },
    { title: "Menunggu Publikasi", color: "#03a9f4", value: 10 },
    { title: "Publikasi", color: "#288314", value: 10 },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto">
      <p className="text-black text-3xl sm:text-4xl font-bold mb-6 hidden sm:block">
        Ikhtisar
      </p>
      <div className="flex sm:mt-10 flex-wrap xl:flex-nowrap">
        <div className="lg:max-w-7xl lg:min-w-[332px]">
          <OverviewSection
            newsDraftList={newsDraftList}
            title="Terakhir Diubah"
          />
          <OverviewChart />
        </div>
        <OverviewActivities activityList={activityList} />
      </div>
    </div>
  );
}
