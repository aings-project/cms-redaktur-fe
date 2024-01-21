import React, { Dispatch, useEffect } from "react";
import NewsDraftLayout from "../../components/news_draft/NewsDraftLayout";
import { useDispatch, useSelector } from "react-redux";
import { ListNewsDraftResponse, asyncReceiveNewsDraft } from "../../states/news_draft/action";
import MainLayout from "../../components/main/MainLayout";
import { RootState } from "../../states";

export default function NewsDraft() {
  const dispatch : Dispatch<any> = useDispatch();
  const newsDraftData: ListNewsDraftResponse | null = useSelector(
    (state: RootState) => state.newsDraft
  );
  const query = useSelector((state: RootState) => state.searchQuery);

  useEffect(() => {
    dispatch(
      asyncReceiveNewsDraft({
        status: "new,reviewing,reviewed",
        title: query,
      })
    );
  }, [dispatch, query]);

  return (
    <MainLayout
      activePage="draf_berita"
      content={<NewsDraftLayout newsDraftData={newsDraftData} title="Berita" />}
      pageTitle="Berita"
    />
  );
}
