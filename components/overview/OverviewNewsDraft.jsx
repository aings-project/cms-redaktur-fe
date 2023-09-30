import React from "react";
import OverviewNewsDraftItem from "./OverviewNewsDraftItem";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../utils/dateTimeFormatter";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function OverviewNewsDraft({ newsDraftList }) {
  const router = useRouter();
  const isLoading = useSelector((state) => state.loading);

  return (
    <div className="mr-6 pb-6 bg-neutral-50 rounded-md border border-zinc-300 shadow-md">
      <p className="text-white text-xl font-semibold p-4 rounded-t-md bg-slate-800">
        Draft Berita Terbaru
      </p>
      {isLoading && (
        <div className="w-full flex justify-center mt-4 lg:mt-0">
          <ReactLoading type="spin" color="#1e293b" height={24} width={24} />
        </div>
      )}
      {!isLoading && (
        <div>
          {newsDraftList.length === 0 && (
            <p className="px-6">Tidak ada berita</p>
          )}
          {newsDraftList.map((item, index) => {
            return (
              <OverviewNewsDraftItem
                key={index}
                onClick={() =>
                  router.push(
                    `news_draft/edit/${item.draft_id}/${item.version}`
                  )
                }
                title={item.title}
                author={item.user_wartawan.username}
                dateTime={dateTimeFormatter(item.created_at)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
