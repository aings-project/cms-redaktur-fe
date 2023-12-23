import React from "react";
import NewsDraftBody from "./NewsDraftBody";
import NewsDraftHeader from "./NewsDraftHeader";
import Pagination from "../shared/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraft } from "../../states/news_draft/action";
import { useState } from "react";
import { parseNavigationToStatus } from "../../utils/draftAttributeParser";

export default function NewsDraftLayout({ newsDraftData, title }) {
  const dispatch = useDispatch();
  const [activeStatus, setActiveStatus] = useState();
  const query = useSelector((state) => state.searchQuery);

  const onSetActiveStatus = (value) => {
    dispatch(
      asyncReceiveNewsDraft({
        status: parseNavigationToStatus(value),
        title: query,
      })
    );
    setActiveStatus(value);
  };

  const handlePageChange = (page) => {
    dispatch(
      asyncReceiveNewsDraft({
        page,
        status: activeStatus,
        title: query,
      })
    );
  };
  return (
    <div className="max-w-screen-2xl mx-auto py-16 px-8 bg-white h-[calc(100dvh)]">
      <NewsDraftHeader title={title} />
      <NewsDraftBody onSetActiveStatus={onSetActiveStatus} />
      <Pagination
        currentPages={
          newsDraftData?.current_page ? newsDraftData.current_page : 1
        }
        totalPages={newsDraftData?.total_pages ? newsDraftData.total_pages : 1}
        onNext={handlePageChange}
        onPrev={handlePageChange}
      />
    </div>
  );
}
