import React from "react";
import OverviewNewsDraftItem from "./OverviewNewsDraftItem";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../utils/dateTimeFormatter";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function OverviewSection({ newsDraftList, title }) {
  const router = useRouter();
  const isLoading = useSelector((state) => state.loading);

  return (
    <div className="lg:mr-6 pb-6 bg-neutral-50 rounded-md border border-zinc-300 shadow-md">
      <p className="text-white text-xl font-semibold p-4 rounded-t-md bg-slate-800">
        {title}
      </p>
      {isLoading && newsDraftList.length === 0 && (
        <div className="w-full flex justify-center mt-4">
          <ReactLoading type="spin" color="#1e293b" height={24} width={24} />
        </div>
      )}
      {newsDraftList.length === 0 && !isLoading && (
        <p className="px-6 pt-4">Tidak ada berita</p>
      )}
      {newsDraftList.map((item, index) => {
        return (
          <OverviewNewsDraftItem
            key={index}
            onClick={() =>
              router.push(`news_draft/edit/${item.draft_id}/${item.version}`)
            }
            title={item.title}
            author={item.user_wartawan.username}
            dateTime={dateTimeFormatter(item.created_at)}
          />
        );
      })}
    </div>
  );
}
