import React from "react";
import OverviewNewsDraftItem from "./OverviewNewsDraftItem";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function OverviewNewsDraft({ newsDraftList }) {
  const router = useRouter();

  return (
    <div className="mr-6 pb-6 bg-neutral-50 rounded-md border border-zinc-300">
      <p className="text-black text-2xl font-extrabold px-6 pt-6 pb-4">
        Draft Berita Terbaru
      </p>
      {newsDraftList.length === 0 && <p className="px-6">Tidak ada berita</p>}
      {newsDraftList.map((item, index) => {
        return (
          <OverviewNewsDraftItem
            key={index}
            onClick={() => router.push("news_draft/edit/1")}
            title={item.title}
            author={item.id_wartawan}
            dateTime={dateTimeFormatter(item.created_at)}
          />
        );
      })}
    </div>
  );
}
