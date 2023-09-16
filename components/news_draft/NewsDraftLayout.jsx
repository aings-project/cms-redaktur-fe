import { Search } from "@mui/icons-material";
import React from "react";
import NewsDraftTabBar from "./NewsDraftTabBar";
import NewsDraftItem from "./NewsDraftItem";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function NewsDraftLayout({ listNewsDraft }) {
  const router = useRouter();
  return (
    <div className="py-16 px-16 flex-grow h-screen overflow-y-auto">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between mb-6">
          <p className="text-black text-4xl font-extrabold">Draf Berita</p>
          <div className="bg-white p-2 border border-zinc-300 rounded-md h-fit">
            <div className="flex items-center">
              <input className="p-2" placeholder="Cari Judul Berita ..." />
              <Search />
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 rounded-md border border-zinc-300 pb-6">
          <NewsDraftTabBar />
          <div className="bg-neutral-50">
            {listNewsDraft.map((item, index) => {
              return (
                <NewsDraftItem
                  key={index}
                  onClick={() => router.push("news_draft/edit/1")}
                  title={item.title}
                  author={item.id_wartawan}
                  dateTime={dateTimeFormatter(item.created_at)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
