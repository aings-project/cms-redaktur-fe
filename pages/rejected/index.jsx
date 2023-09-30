import React, { useEffect, useState } from "react";
import NewsDraftLayout from "../../components/news_draft/NewsDraftLayout";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraft } from "../../states/news_draft/action";
import MainLayout from "../../components/main/MainLayout";

export default function Rejected() {
  const dispatch = useDispatch();
  const newsDraftData = useSelector((state) => state.newsDraft);
  const status = ["Draf Ditolak"];

  useEffect(() => {
    dispatch(asyncReceiveNewsDraft({ status: "rejected" }));
  }, [dispatch]);
  const handlePageChange = (page) => {
    dispatch(
      asyncReceiveNewsDraft({
        page,
        status: "rejected",
      })
    );
  };

  return (
    <MainLayout
      activePage="rejected"
      content={
        <NewsDraftLayout
          activeStatus={"Draf Ditolak"}
          onSetActiveStatus={() => {}}
          newsDraftData={newsDraftData}
          onNextPage={handlePageChange}
          onPrevPage={handlePageChange}
          status={status}
          title="Draf Ditolak"
        />
      }
      pageTitle="Draf Ditolak"
    />
  );
}
