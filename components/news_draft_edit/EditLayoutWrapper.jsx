import React, { useEffect, useState } from "react";
import ValidateModal from "./ValidateModal";
import ValidationResult from "./ValidationResultModal";
import EditorLayout from "./EditorLayout";

export default function EditLayoutWrapper({
  newsDraft,
  onValidate,
  onUpdateDraft,
  isEditable,
  showValidationModal,
  showValidationResult,
  setShowValidationModal,
  setShowValidationResult,
}) {
  return (
    <div className="relative">
      <EditorLayout
        onUpdateDraft={onUpdateDraft}
        isEditable={isEditable}
        newsDraft={newsDraft}
        showValidationModal={(value) => {
          setShowValidationModal(value);
        }}
        showValidationResult={(value) => {
          setShowValidationResult(value);
        }}
      />
      {showValidationModal ? (
        <ValidateModal
          promptWartawan={newsDraft.Prompt}
          onClose={() => setShowValidationModal(false)}
          onValidate={(value) => {
            onValidate(value);
          }}
        />
      ) : null}
      {showValidationResult ? (
        <ValidationResult
          onClose={() => setShowValidationResult(false)}
          validationData={newsDraft.validation}
          onRevalidate={() => {
            setShowValidationResult(false);
            setShowValidationModal(true);
          }}
        />
      ) : null}
    </div>
  );
}
