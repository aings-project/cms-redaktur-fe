import React from "react";
import MainSidebar from "../../components/main/MainSidebar";
import NewsDraftLayout from "../../components/news_draft/NewsDraftLayout";
import useRequireAuth from "../../hooks/useRequireAuth";

export default function NewsDraft() {
  const auth = useRequireAuth();

  return (
    <div className="flex">
      <MainSidebar activePage="draf_berita" />
      <NewsDraftLayout />
    </div>
  );
}
