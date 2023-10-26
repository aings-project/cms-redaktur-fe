import React from "react";
import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function OverviewChart({}) {
  const defaultLabelStyle = {
    fontSize: "5px",
    fill: "#FFF",
  };
  const statusData = [
    { title: "Baru", color: "#94a3b8", value: 20 },
    { title: "Ditolak", color: "#e60000", value: 11 },
    { title: "Disunting", color: "#f59e0b", value: 15 },
    { title: "Menunggu Wartawan", color: "#a16207", value: 13 },
    { title: "Menunggu Publikasi", color: "#03a9f4", value: 9 },
    { title: "Publikasi", color: "#1e3a8a", value: 44 },
  ];
  const validationData = [
    { title: "Belum Divalidasi", color: "#94a3b8", value: 20 },
    { title: "Berita Valid", color: "#1e3a8a", value: 44 },
    { title: "Berita Tidak Valid", color: "#e60000", value: 15 },
  ];

  const [rawData, setRawData] = useState(statusData);
  const [filterBy, setFilterBy] = useState("Status");
  const [hovered, setHovered] = useState(-1);

  const data = rawData.map((entry, index) => {
    if (hovered === index) {
      return {
        ...entry,
        color: "grey",
      };
    }
    return entry;
  });

  const handleSelectType = (event) => {
    setFilterBy(event.target.value);
    if (event.target.value === "Status") {
      setRawData(statusData);
    } else {
      setRawData(validationData);
    }
  };

  return (
    <div>
      <p className="text-sky-800 text-lg font-bold p-4 border-b-4 border-sky-800 bg-white lg:mr-6">
        Statistik Berita
      </p>
      <div className="flex items-center mt-4 mr-4 w-full">
        <p className="px-4 text-black font-semibold">Berdasarkan: </p>
        <select
          onChange={handleSelectType}
          className="text-black text-base font-semibold px-4 py-2 bg-white border-2 rounded-md border-neutral-200 focus:outline-sky-400 w-full lg:mr-6"
        >
          {["Status", "Validasi Berita"].map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
      <div className="flex-none sm:flex sm:mb-8 mt-8">
        <PieChart
          className="w-full sm:w-1/2 sm:h-1/2"
          animate
          data={data}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
          labelStyle={{
            ...defaultLabelStyle,
          }}
          segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
          onMouseOver={(_, index) => {
            setHovered(index);
          }}
          onMouseOut={(_, __) => {
            setHovered(-1);
          }}
        />
        {filterBy === "Status" && (
          <div className="flex flex-wrap sm:flex-col sm:ml-12 mt-6">
            <div className="flex mb-4 mr-4 sm:mr-0">
              <div className={`p-3 bg-[#94a3b8] mx-2`} />
              <p>Baru ({rawData[0].value})</p>
            </div>
            <div className="flex mb-4 mr-4 sm:mr-0">
              <div className={`p-3 bg-[#e60000] mx-2`} />
              <p>Ditolak ({rawData[1].value})</p>
            </div>
            <div className="flex mb-4 mr-4 sm:mr-0">
              <div className={`p-3 bg-[#f59e0b] mx-2`} />
              <p>Disunting ({rawData[2].value})</p>
            </div>
            <div className="flex mb-4 mr-4 sm:mr-0">
              <div className={`p-3 bg-[#a16207] mx-2`} />
              <p>Menunggu Wartawan ({rawData[3].value})</p>
            </div>
            <div className="flex mb-4 mr-4 sm:mr-0">
              <div className={`p-3 bg-[#03a9f4] mx-2`} />
              <p>Menunggu Publikasi ({rawData[4].value})</p>
            </div>
            <div className="flex mb-4 mr-4 sm:mr-0">
              <div className={`p-3 bg-[#1e3a8a] mx-2`} />
              <p>Publikasi ({rawData[5].value})</p>
            </div>
          </div>
        )}
        {filterBy !== "Status" && (
          <div className="flex flex-wrap sm:flex-col sm:ml-12 mt-6">
            <div className="flex mb-4 mr-4 sm:mr-0">
              <div className={`p-3 bg-[#94a3b8] mx-2`} />
              <p>Belum Divalidasi ({rawData[0].value})</p>
            </div>
            <div className="flex mb-4 mr-4 sm:mr-0">
              <div className={`p-3 bg-[#1e3a8a] mx-2`} />
              <p>Berita Valid ({rawData[1].value})</p>
            </div>
            <div className="flex mb-4 mr-4 sm:mr-0">
              <div className={`p-3 bg-[#e60000] mx-2`} />
              <p>Berita Tidak Valid ({rawData[2].value})</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
