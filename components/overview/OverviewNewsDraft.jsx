import React from "react";
import OverviewNewsDraftItem from "./OverviewNewsDraftItem";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function OverviewNewsDraft({ newsDraftList }) {
  const router = useRouter();

  return (
    <div className="mr-6 pb-6 bg-neutral-50 rounded-md border border-zinc-300">
      <p className="text-white text-xl font-semibold p-4 bg-slate-800">
        Draft Berita Terbaru
      </p>
      {newsDraftList.length === 0 && <p className="px-6">Tidak ada berita</p>}
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
