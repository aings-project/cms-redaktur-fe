import React, { useEffect, useState } from "react";
import NewsDraftLayout from "../../components/news_draft/NewsDraftLayout";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraft } from "../../states/news_draft/action";
import MainLayout from "../../components/main/MainLayout";

export default function NewsDraft() {
  const dispatch = useDispatch();
  const newsDraftData = useSelector((state) => state.newsDraft);
  const [activeStatus, setActiveStatus] = useState("new");

  useEffect(() => {
    dispatch(asyncReceiveNewsDraft());
  }, [dispatch]);
  const handleNextPage = (nextPage) => {
    dispatch(asyncReceiveNewsDraft({ page: nextPage }));
  };
  const handlePrevPage = (prevPage) => {
    dispatch(asyncReceiveNewsDraft({ page: prevPage }));
  };

  return (
    <MainLayout
      activePage="draf_berita"
      content={
        <NewsDraftLayout
          activeStatus={activeStatus}
          onSetActiveStatus={(value) => {
            setActiveStatus(value);
            dispatch(asyncReceiveNewsDraft({ status: value }));
          }}
          newsDraftData={newsDraftData}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      }
      pageTitle="Draf Berita"
    />
  );
}
