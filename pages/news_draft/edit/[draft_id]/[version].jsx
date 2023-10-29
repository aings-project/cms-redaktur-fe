import React, { useEffect, useState } from "react";
import useRequireAuth from "../../../../hooks/useRequireAuth";
import EditLayoutWrapper from "../../../../components/news_draft_edit/EditLayoutWrapper";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncReceiveNewsDraftDetail,
  asyncUpdateNewsDraft,
} from "../../../../states/news_draft_detail/action";
import { asyncReceiveValidationData } from "../../../../states/validation/action";

export default function EditNewsDraft() {
  const auth = useRequireAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const { draft_id, version } = router.query;
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [showValidationResult, setShowValidationResult] = useState(false);

  const onValidate = (value) => {
    dispatch(
      asyncReceiveValidationData({
        draft_id,
        version,
        information: value,
        onSuccess: (_) => {
          setShowValidationModal(false);
          setShowValidationResult(true);
        },
      })
    );
  };

  const onUpdateDraft = ({ id, content, title, status }) => {
    dispatch(
      asyncUpdateNewsDraft({
        title,
        content,
        status,
        id,
        version,
        draft_id,
      })
    );
  };

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

  return (
    <EditLayoutWrapper
      newsDraft={newsDraft}
      onValidate={(value) => onValidate(value)}
      onUpdateDraft={onUpdateDraft}
      setShowValidationModal={setShowValidationModal}
      setShowValidationResult={setShowValidationResult}
      showValidationModal={showValidationModal}
      showValidationResult={showValidationResult}
      isEditable={
        (newsDraft.status === "reviewing" || newsDraft.status === "new") &&
        newsDraft.version === newsDraft.maxVersion
      }
    />
  );
}
