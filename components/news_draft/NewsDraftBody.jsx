import React from "react";
import NewsDraftTabBar from "./NewsDraftTabBar";
import NewsDraftItem from "./NewsDraftItem";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../utils/dateTimeFormatter";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { reverseConvertStatus } from "../../utils/draftAttributeParser";

export default function NewsDraftBody({
  listNewsDraft,
  activeStatus,
  onSetActiveStatus,
  status,
}) {
  const router = useRouter();
  const isLoading = useSelector((state) => state.loading);

  return (
    <div className="bg-white pb-6">
      <NewsDraftTabBar onSetActiveStatus={onSetActiveStatus} status={status} />
      <div className="bg-white flex flex-col justify-end mt-1 border">
        {/* ------- FILTER START -------- */}
        <div className="sm:flex mb-8 hidden sm:bg-white">
          <div className="flex items-center mt-4 mr-4 w-full">
            <p className="px-4 text-black font-semibold">Status: </p>
            <select
              onChange={(e) => {
                onSetActiveStatus(reverseConvertStatus(e.target.value));
              }}
              className="text-black text-base font-semibold px-4 py-2 bg-white border-2 rounded-md border-sky-200 focus:outline-sky-400 w-full"
            >
              {status.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          </div>
          <div className="flex items-center mt-4 mr-4 w-full">
            <p className="px-4 text-black font-semibold">Filter: </p>
            <select className="text-black text-base font-semibold px-4 py-2 bg-white border-2 rounded-md border-sky-200 focus:outline-sky-400 w-full">
              {["Semua Kategori"].map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          </div>
        </div>
        {/* ------- FILTER END -------- */}
        {isLoading && (
          <div className="w-full flex justify-center mt-4 sm:mt-0">
            <ReactLoading type="spin" color="#1e293b" height={24} width={24} />
          </div>
        )}
        {!isLoading && (
          <div className="shadow-sm rounded-md pb-6">
            {listNewsDraft.length === 0 && (
              <p className="pt-4 px-6">Tidak ada berita</p>
            )}
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
                  author={item.user_wartawan.username}
                  dateTime={dateTimeFormatter(item.created_at)}
                  index={index}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
