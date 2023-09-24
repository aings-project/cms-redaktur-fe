import React, { useEffect, useState } from "react";
import ValidateModal from "./ValidateModal";
import ValidationResult from "./ValidationResultModal";
import NewsDraftEditorLayout from "./NewsDraftEditorLayout";

export default function NewsDraftEditLayout({
  newsDraft,
  validationData,
  auth,
  onValidate,
  onRevalidate,
  onUpdateDraft,
  isEditable,
}) {
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [showValidationResult, setShowValidationResult] = useState(false);

  useEffect(() => {
    if (validationData) {
      setShowValidationModal(false);
    }
  }, [validationData]);

  return (
    <div className="relative">
      <NewsDraftEditorLayout
        auth={auth}
        onUpdateDraft={onUpdateDraft}
        isEditable={isEditable}
        newsDraft={newsDraft}
        validationData={validationData}
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
          validationData={validationData}
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
