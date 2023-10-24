import React, { useEffect, useState } from "react";
import NewsDraftLayout from "../../components/news_draft/NewsDraftLayout";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraft } from "../../states/news_draft/action";
import MainLayout from "../../components/main/MainLayout";
import {
  convertStatus,
  reverseConvertStatus,
} from "../../utils/draftAttributeParser";

export default function NewsDraft() {
  const dispatch = useDispatch();
  const newsDraftData = useSelector((state) => state.newsDraft);
  const [activeStatus, setActiveStatus] = useState();
  const status = [
    "Semua",
    "Baru",
    "Sedang Disunting",
    "Menunggu Persetujuan Wartawan",
  ];

  useEffect(() => {
    dispatch(asyncReceiveNewsDraft());
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(
      asyncReceiveNewsDraft({
        page,
        status: reverseConvertStatus(activeStatus),
      })
    );
  };

  return (
    <MainLayout
      activePage="draf_berita"
      content={
        <NewsDraftLayout
          activeStatus={activeStatus}
          onSetActiveStatus={(value) => {
            setActiveStatus(convertStatus({ value }));
            dispatch(asyncReceiveNewsDraft({ status: value }));
          }}
          newsDraftData={newsDraftData}
          onNextPage={handlePageChange}
          onPrevPage={handlePageChange}
          status={status}
          title="Berita"
        />
      }
      pageTitle="Berita"
    />
  );
}
