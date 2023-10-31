import React, { useEffect, useState } from "react";
import NewsDraftLayout from "../../components/news_draft/NewsDraftLayout";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraft } from "../../states/news_draft/action";
import MainLayout from "../../components/main/MainLayout";

export default function NewsDraft() {
  const dispatch = useDispatch();
  const newsDraftData = useSelector((state) => state.newsDraft);

  useEffect(() => {
    dispatch(
      asyncReceiveNewsDraft({
        status: "new,reviewing,reviewed",
      })
    );
  }, [dispatch]);

  return (
    <MainLayout
      activePage="draf_berita"
      content={<NewsDraftLayout newsDraftData={newsDraftData} title="Berita" />}
      pageTitle="Berita"
    />
  );
}
