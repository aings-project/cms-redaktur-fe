import { useRouter } from "next/router";
import CommentsLayout from "../../../components/comments/CommentsLayout";
import useRequireAuth from "../../../hooks/useRequireAuth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncReceiveNewsDraftDetail } from "../../../states/news_draft_detail/action";

export default function Comments() {
  const router = useRouter();
  const auth = useRequireAuth();
  const { draft_id, version } = router.query;
  const dispatch = useDispatch();
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

  return <CommentsLayout newsDraft={newsDraft} />;
}
