import React from "react";
import GeneralInfoAccordion from "./GeneralInfoAccordion";
import ValidationAccordion from "./ValidationAccordion";
import { NewsDraftResponse } from "../../../states/news_draft_detail/action";
type EditorSidebarTabType = {
  onValidate: any,
  onUpdateDraft: any,
  newsDraft: NewsDraftResponse,
}
export default function EditorSidebarTab({
  onValidate,
  onUpdateDraft,
  newsDraft,
} : EditorSidebarTabType) {
  return (
    <div className="">
      <div className="border-b">
        <GeneralInfoAccordion
          newsDraft={newsDraft}
          onUpdateDraft={onUpdateDraft}
        />
      </div>
      <div>
        <ValidationAccordion onValidate={onValidate} newsDraft={newsDraft} />
      </div>
    </div>
  );
}
