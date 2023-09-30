import React, { useEffect, useState } from "react";
import NewsDraftLayout from "../../components/news_draft/NewsDraftLayout";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraft } from "../../states/news_draft/action";
import MainLayout from "../../components/main/MainLayout";
import { convertStatus } from "../../utils/draftAttributeParser";

export default function Publication() {
  const dispatch = useDispatch();
  const newsDraftData = useSelector((state) => state.newsDraft);
  const [activeStatus, setActiveStatus] = useState("Siap Publikasi");
  const status = ["Siap Publikasi", "Sudah Publikasi"];

  useEffect(() => {
    dispatch(asyncReceiveNewsDraft({ status: "approved" }));
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
      activePage="publication"
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
          title="Publikasi"
        />
      }
      pageTitle="Publikasi"
    />
  );
}
