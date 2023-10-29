import React, { useState } from "react";
import ValidateModal from "./validation_modal/ValidateModal";
import ValidationResult from "./validation_modal/ValidationResultModal";
import EditorLayout from "./EditorLayout";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveValidationData } from "../../states/validation/action";

export default function EditLayoutWrapper() {
  const dispatch = useDispatch();
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [showValidationResult, setShowValidationResult] = useState(false);

  const onValidate = (value) => {
    dispatch(
      asyncReceiveValidationData({
        draft_id: newsDraft.draft_id,
        version: newsDraft.version,
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
        showValidationModal={(value) => {
          setShowValidationModal(value);
        }}
        showValidationResult={(value) => {
          setShowValidationResult(value);
        }}
      />
      {showValidationModal && (
        <ValidateModal
          promptWartawan={""}
          onClose={() => setShowValidationModal(false)}
          onValidate={(value) => {
            onValidate(value);
          }}
        />
      )}
      {showValidationResult && (
        <ValidationResult
          onClose={() => setShowValidationResult(false)}
          validationData={newsDraft.validation}
          onRevalidate={() => {
            setShowValidationResult(false);
            setShowValidationModal(true);
          }}
        />
      )}
    </div>
  );
}
