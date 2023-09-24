import { Search } from "@mui/icons-material";
import React from "react";
import NewsDraftTabBar from "./NewsDraftTabBar";
import NewsDraftItem from "./NewsDraftItem";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function NewsDraftLayout({ listNewsDraft }) {
  const router = useRouter();
  return (
    <div className="py-16 px-6 md:px-16 flex-grow h-screen overflow-y-auto">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between mb-6 flex-wrap">
          <p className="text-black text-3xl sm:text-4xl font-extrabold min-w-fit mr-6 mb-6">
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
            <div className="lg:flex mb-1 hidden lg:bg-slate-50">
              <select className="text-black text-base font-semibold px-4 py-2 bg-slate-50 w-fit">
                {["Semua Kategori"].map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>

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
