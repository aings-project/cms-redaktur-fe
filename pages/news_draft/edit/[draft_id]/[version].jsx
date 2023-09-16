import React, { useState } from "react";
import useRequireAuth from "../../../../hooks/useRequireAuth";
import NewsDraftEditLayout from "../../../../components/news_draft_edit/NewsDraftEditLayout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraftDetail } from "../../../../states/news_draft_detail/action";

export default function EditNewsDraft() {
  const auth = useRequireAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const { draft_id, version } = router.query;
  const newsDraft = useSelector((state) => state.newsDraftDetail);

  useState(
    () => [
      dispatch(
        asyncReceiveNewsDraftDetail({
          draft_id,
          version,
        })
      ),
    ],
    [dispatch]
  );

  if (!newsDraft) {
    return <div />;
  }

  return <NewsDraftEditLayout newsDraft={newsDraft} />;
}
