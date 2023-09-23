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
        <div className="flex justify-between mb-6 flex-wrap">
          <p className="text-black text-4xl font-extrabold min-w-fit mr-6 mb-6">
            Draf Berita
          </p>
          <div className="bg-white p-2 border border-zinc-300 rounded-md h-fit w-full md:w-fit">
            <div className="flex items-center justify-between">
              <input className="p-1" placeholder="Cari Judul Berita ..." />
              <Search />
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 rounded-md border border-zinc-300 pb-6">
          <NewsDraftTabBar />
          <div className="bg-neutral-50 flex flex-col justify-end">
            <select className="text-black text-base font-semibold px-4 py-2 mt-1 mb-1 mx-6 bg-slate-50 border-b-2 border-black">
              {["Semua Kategori", "Politik", "Olahraga"].map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
            {listNewsDraft.map((item, index) => {
              return (
                <NewsDraftItem
                  key={index}
                  onClick={() =>
                    router.push(
                      `news_draft/edit/${item.draft_id}/${item.version}`
                    )
                  }
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
