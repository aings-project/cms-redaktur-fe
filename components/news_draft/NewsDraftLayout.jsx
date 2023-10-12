import React from "react";
import NewsDraftBody from "./NewsDraftBody";
import NewsDraftHeader from "./NewsDraftHeader";
import Pagination from "../shared/Pagination";

export default function NewsDraftLayout({
  newsDraftData,
  activeStatus,
  onSetActiveStatus,
  onNextPage,
  onPrevPage,
  status,
  title,
}) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NewsDraftHeader title={title} />
      <NewsDraftBody
        listNewsDraft={
          newsDraftData?.draft_berita ? newsDraftData.draft_berita : []
        }
        activeStatus={activeStatus}
        onSetActiveStatus={onSetActiveStatus}
        status={status}
      />
      <Pagination
        currentPages={
          newsDraftData?.current_page ? newsDraftData.current_page : 1
        }
        totalPages={newsDraftData?.total_pages ? newsDraftData.total_pages : 1}
        onNext={onNextPage}
        onPrev={onPrevPage}
      />
    </div>
  );
}
