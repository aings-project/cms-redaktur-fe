import { useRouter } from "next/router";
import useRequireAuth from "../../../../hooks/useRequireAuth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncReceiveNewsDraftDetail } from "../../../../states/news_draft_detail/action";
import {
  asyncPostCommentList,
  asyncReceiveCommentList,
} from "../../../../states/comments/action";
import CommentsLayout from "../../../../components/comments/CommentsLayout";

export default function Comments() {
  const router = useRouter();
  const auth = useRequireAuth();
  const { draft_id, version, id } = router.query;
  const dispatch = useDispatch();
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(asyncReceiveCommentList({ id }));
    dispatch(
      asyncReceiveNewsDraftDetail({
        draft_id,
        version,
      })
    );
  }, [dispatch, draft_id, version, id]);

  const onPostComment = (content) => {
    dispatch(
      asyncPostCommentList({
        content,
        id_redaktur: auth.id,
        id: newsDraft.draft_berita.id,
      })
    );
  };

  if (!newsDraft || !comments) {
    return <div />;
  }

  return (
    <CommentsLayout
      comments={comments}
      newsDraft={newsDraft}
      onPostComment={onPostComment}
    />
  );
}
