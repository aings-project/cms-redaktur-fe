import React from "react";
import GeneralInfoAccordion from "./GeneralInfoAccordion";
import ValidationAccordion from "./ValidationAccordion";

export default function EditorSidebarTab({ onValidate, onUpdateDraft }) {
  return (
    <div className="">
      <div className="border-b">
        <GeneralInfoAccordion onUpdateDraft={onUpdateDraft} />
      </div>
      <div>
        <ValidationAccordion onValidate={onValidate} />
      </div>
    </div>
  );
}
