import React, { Dispatch, useEffect } from "react";
import useRequireAuth from "../../../../hooks/useRequireAuth";
import EditLayoutWrapper from "../../../../components/news_draft_edit/EditLayoutWrapper";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { NewsDraftResponse, asyncReceiveNewsDraftDetail } from "../../../../states/news_draft_detail/action";
import { RootState } from "../../../../states";

export default function EditNewsDraft() {
  useRequireAuth();
  const router = useRouter();
  const dispatch : Dispatch<any> = useDispatch();
  const { draft_id, version } = router.query;
  const newsDraft : NewsDraftResponse | null = useSelector((state: RootState) => state.newsDraftDetail);

  useEffect(() => {
    if (draft_id) {
      const id : number = +draft_id;
      const ver : number = +version;
      dispatch(
        asyncReceiveNewsDraftDetail({
          draft_id: id,
          version: ver,
        })
      );
    }
  }, [dispatch, draft_id, version]);

  if (!newsDraft) {
    return <div />;
  }

  return <EditLayoutWrapper newsDraft={newsDraft} />;
}
