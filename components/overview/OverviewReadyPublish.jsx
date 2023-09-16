import React from "react";
import OverviewNewsDraftItem from "./OverviewNewsDraftItem";
import { useRouter } from "next/router";

export default function OverviewReadyPublish({ newsDraftList }) {
  const router = useRouter();

  return (
    <div className="mr-6 pb-6 bg-neutral-50 rounded-md border border-zinc-300">
      <p className="text-black text-2xl font-extrabold px-6 pt-6 pb-4">
        Siap Publikasi
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
            author={item.id_wartawan}
            dateTime={dateTimeFormatter(item.created_at)}
          />
        );
      })}
    </div>
  );
}
