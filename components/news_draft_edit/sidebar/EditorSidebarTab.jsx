import React, { useState } from "react";
import GeneralInfoAccordion from "./GeneralInfoAccordion";
import ValidationAccordion from "./ValidationAccordion";

export default function EditorSidebarTab({ onValidate, onUpdateDraft }) {
  return (
    <div>
      <div className="border-b-2 border-white">
        <GeneralInfoAccordion onUpdateDraft={onUpdateDraft} />
      </div>
      <div className="border-b-2 border-white">
        <ValidationAccordion onValidate={onValidate} />
      </div>
    </div>
  );
}
