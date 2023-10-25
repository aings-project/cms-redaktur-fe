import React from "react";

import { activityActionParserLong } from "../../utils/activityActionParser";
import dateTimeFormatter from "../../utils/dateTimeFormatter";
import ActivityItem from "./ActivityItem";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Select from "react-select";

export default function ActivitiesBody({ data }) {
  const isLoading = useSelector((state) => state.loading);
  const router = useRouter();

  const options = [
    { value: "new", label: "Menambahkan Draf" },
    { value: "rejected", label: "Menolak Draf" },
    { value: "reviewing", label: "Menyunting Draf" },
    { value: "with_data", label: "Melakukan Validasi" },
    { value: "reviewed", label: "Mengirim ke Wartawan" },
  ];

  const handleFilter = (value) => {
    const filters = [];
    value.map((e) => filters.push(e.value));
  };

  return (
    <div>
      <div className="flex items-center mt-4 mr-4 w-full mb-4">
        <p className="text-black font-semibold pr-4">Filter: </p>
        <Select
          isMulti
          name="filter"
          options={options}
          className="w-full"
          onChange={handleFilter}
          placeholder="Pilih aksi..."
        />
      </div>
      {/* ---------- START MOBILE ACTIVITIES ------------ */}
      <div className="flex-col lg:hidden shadow-md">
        <div className="border-b-4 border-sky-800 w-full rounded-t-md" />
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
              <ReactLoading
                type="spin"
                color="#1e293b"
                height={24}
                width={24}
              />
            </div>
          )}
        </div>
      </div>
      {/* ---------- END MOBILE ACTIVITIES ------------ */}
      {/* ---------- START TABLE ------------ */}
      <div className="w-full rounded-md pb-4 lg:block hidden">
        <div className="lg:flex hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-white text-sky-800 border-b-4 border-sky-800">
                <th className="px-4 py-4 text-left">Waktu</th>
                <th className="px-4 py-4 text-left">Judul Berita</th>
                <th className="px-4 py-4 text-left">Nama</th>
                <th className="px-4 py-4 text-left">Aktivitas</th>
              </tr>
            </thead>
            <tbody className="border-2">
              {data.map((item, index) => (
                <tr
                  onClick={() => {
                    router.push(
                      `/news_draft/edit/${item.object.draft_id}/${item.object.version}`
                    );
                  }}
                  className={`${
                    index % 2 === 1 ? "bg-sky-50" : "bg-white"
                  } hover:bg-sky-200 hover:cursor-pointer`}
                  key={index}
                >
                  <td className="px-4 py-3">
                    {dateTimeFormatter(item.timestamp)}
                  </td>
                  <td className="px-4 py-3">{item.title}</td>
                  <td className="px-4 py-3">{item.subject}</td>
                  <td className="px-4 py-3">
                    {activityActionParserLong(item.action)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isLoading && (
          <div className="w-full flex justify-center mt-4 lg:mt-0">
            <ReactLoading type="spin" color="#1e293b" height={24} width={24} />
          </div>
        )}
      </div>
      {/* ---------- END TABLE ------------ */}
    </div>
  );
}
