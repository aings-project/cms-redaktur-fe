import React, { useEffect } from "react";
import useRequireAuth from "../../../../hooks/useRequireAuth";
import EditLayoutWrapper from "../../../../components/news_draft_edit/EditLayoutWrapper";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraftDetail } from "../../../../states/news_draft_detail/action";

export default function EditNewsDraft() {
  const auth = useRequireAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const { draft_id, version } = router.query;
  const newsDraft = useSelector((state) => state.newsDraftDetail);

  useEffect(() => {
    dispatch(
      asyncReceiveNewsDraftDetail({
        draft_id,
        version,
      })
    );
  }, [dispatch, draft_id, version]);

  if (!newsDraft) {
    return <div />;
  }

  return <EditLayoutWrapper />;
}
