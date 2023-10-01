import React from "react";

import { activityActionParserLong } from "../../utils/activityActionParser";
import dateTimeFormatter from "../../utils/dateTimeFormatter";
import ActivityItem from "./ActivityItem";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function ActivitiesBody({ data }) {
  const isLoading = useSelector((state) => state.loading);
  const router = useRouter();

  return (
    <div>
      <div className="flex-col lg:hidden shadow-md">
        <div className="bg-slate-800 h-12 w-full rounded-t-md" />
        <div className="rounded-b-md">
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
      <div className="w-full rounded-md shadow-md pb-4 lg:block hidden">
        <div className="lg:flex hidden">
          <table className="min-w-full bg-neutral-50">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-4 py-4 text-left">Waktu</th>
                <th className="px-4 py-4 text-left">Judul Berita</th>
                <th className="px-4 py-4 text-left">Nama</th>
                <th className="px-4 py-4 text-left">Aktivitas</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  onClick={() => {
                    router.push(
                      `/news_draft/edit/${item.object.draft_id}/${item.object.version}`
                    );
                  }}
                  className="hover:bg-slate-200 hover:cursor-pointer"
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
    </div>
  );
}
