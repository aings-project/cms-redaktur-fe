import React from "react";
import MainSidebar from "../../components/main/MainSidebar";
import NewsDraftLayout from "../../components/news_draft/NewsDraftLayout";

export default function NewsDraft() {
  return (
    <div className="flex">
      <MainSidebar activePage="draf_berita" />
      <NewsDraftLayout />
    </div>
  );
}
