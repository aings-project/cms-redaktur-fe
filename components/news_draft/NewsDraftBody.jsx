import React from "react";
import NewsDraftTabBar from "./NewsDraftTabBar";
import NewsDraftItem from "./NewsDraftItem";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function NewsDraftBody({ listNewsDraft }) {
  const router = useRouter();

  return (
    <div className="bg-neutral-50 rounded-md border border-zinc-300 pb-6 shadow-md">
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
                router.push(`news_draft/edit/${item.draft_id}/${item.version}`)
              }
              title={item.title}
              author={item.user_wartawan.username}
              dateTime={dateTimeFormatter(item.created_at)}
            />
          );
        })}
      </div>
    </div>
  );
}
