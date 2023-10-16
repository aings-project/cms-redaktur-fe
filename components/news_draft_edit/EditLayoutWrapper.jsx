import React, { useEffect, useState } from "react";
import ValidateModal from "./ValidateModal";
import ValidationResult from "./ValidationResultModal";
import NewsDraftEditorLayout from "./NewsDraftEditorLayout";

export default function EditLayoutWrapper({
  newsDraft,
  auth,
  onValidate,
  onRevalidate,
  onUpdateDraft,
  isEditable,
}) {
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [showValidationResult, setShowValidationResult] = useState(false);

  return (
    <div className="relative">
      <NewsDraftEditorLayout
        auth={auth}
        onUpdateDraft={onUpdateDraft}
        isEditable={isEditable}
        newsDraft={newsDraft}
        validationData={newsDraft.validation_result}
        showValidationModal={(value) => {
          setShowValidationModal(value);
        }}
        showValidationResult={(value) => {
          setShowValidationResult(value);
        }}
      />
      {showValidationModal ? (
        <ValidateModal
          onClose={() => setShowValidationModal(false)}
          onValidate={(value) => {
            onValidate(value);
          }}
        />
      ) : null}
      {showValidationResult ? (
        <ValidationResult
          onClose={() => setShowValidationResult(false)}
          validationData={newsDraft.validation_result[0]}
          onRevalidate={() => {
            setShowValidationResult(false);
            setShowValidationModal(true);
            onRevalidate();
          }}
        />
      ) : null}
    </div>
  );
}
