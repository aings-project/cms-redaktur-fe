import React, { useState } from "react";
import ValidateModal from "./validation_modal/ValidateModal";
import ValidationResult from "./validation_modal/ValidationResultModal";
import EditorLayout from "./EditorLayout";
import { useDispatch } from "react-redux";
import { asyncReceiveValidationData } from "../../states/validation/action";
import { Dispatch } from "@reduxjs/toolkit";
import { NewsDraft, NewsDraftResponse } from "../../states/news_draft_detail/action";

export default function EditLayoutWrapper({newsDraft} : {newsDraft: NewsDraftResponse}) {
  const dispatch : Dispatch<any> = useDispatch();
  const draft : NewsDraft = newsDraft.draft_berita;
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [showValidationResult, setShowValidationResult] = useState(false);

  const onValidate = (value: string) => {
    dispatch(
      asyncReceiveValidationData({
        draft_id: draft.draft_id,
        version: draft.version,
        information: value,
        onSuccess: (_) => {
          setShowValidationModal(false);
          setShowValidationResult(true);
        },
      })
    );
  };

  return (
    <div className="relative">
      <EditorLayout
        newsDraft={newsDraft}
        showValidationModal={(value) => {
          setShowValidationModal(value);
        }}
        showValidationResult={(value) => {
          setShowValidationResult(value);
        }}
      />
      {showValidationModal && (
        <ValidateModal
          promptWartawan={draft.Prompt.content}
          onClose={() => setShowValidationModal(false)}
          onValidate={(value) => {
            onValidate(value);
          }}
        />
      )}
      {showValidationResult && (
        <ValidationResult
          onClose={() => setShowValidationResult(false)}
          validationData={newsDraft.validation_result}
          onRevalidate={() => {
            setShowValidationResult(false);
            setShowValidationModal(true);
          }}
        />
      )}
    </div>
  );
}
