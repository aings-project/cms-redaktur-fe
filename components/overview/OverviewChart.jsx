import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function OverviewChart({}) {
  const defaultLabelStyle = {
    fontSize: "6px",
    fontFamily: "sans-serif",
    fill: "#FFF",
    fontWeight: "bold",
  };
  const data = [
    { title: "Baru", color: "#0074e4", value: 20 },
    { title: "Ditolak", color: "#e60000", value: 11 },
    { title: "Disunting", color: "#4caf50", value: 15 },
    { title: "Menunggu Wartawan", color: "#9c27b0", value: 13 },
    { title: "Menunggu Publikasi", color: "#03a9f4", value: 9 },
    { title: "Publikasi", color: "#288314", value: 44 },
  ];
  return (
    <div>
      <p className="text-sky-800 text-lg font-bold p-4 border-b-4 border-sky-800 bg-white lg:mr-6">
        Statistik Berita
      </p>
      <div className="flex-none sm:flex sm:mb-8 mt-8">
        <PieChart
          className="w-full sm:w-1/2 sm:h-1/2"
          animate
          data={data}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
          labelStyle={{
            ...defaultLabelStyle,
          }}
        />
        <div className="flex flex-wrap sm:flex-col sm:ml-8 mt-6">
          <div className="flex mb-4 mr-4 sm:mr-0">
            <div className={`p-3 bg-[#0074e4] mx-2`} />
            <p>Baru</p>
          </div>
          <div className="flex mb-4 mr-4 sm:mr-0">
            <div className={`p-3 bg-[#e60000] mx-2`} />
            <p>Ditolak</p>
          </div>
          <div className="flex mb-4 mr-4 sm:mr-0">
            <div className={`p-3 bg-[#4caf50] mx-2`} />
            <p>Disunting</p>
          </div>
          <div className="flex mb-4 mr-4 sm:mr-0">
            <div className={`p-3 bg-[#9c27b0] mx-2`} />
            <p>Menunggu Wartawan</p>
          </div>
          <div className="flex mb-4 mr-4 sm:mr-0">
            <div className={`p-3 bg-[#03a9f4] mx-2`} />
            <p>Menunggu Publikasi</p>
          </div>
          <div className="flex mb-4 mr-4 sm:mr-0">
            <div className={`p-3 bg-[#288314] mx-2`} />
            <p>Publikasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
