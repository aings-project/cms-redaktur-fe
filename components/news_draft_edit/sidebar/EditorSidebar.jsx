import { AccountCircle, KeyboardArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import EditorDropdown from "./EditorDropdown";
import SecondaryButton from "../../shared/SecondaryButton";
import { convertStatus } from "../../../utils/draftAttributeParser";
import EditorInfo from "./EditorInfo";
import EditorValidation from "./EditorValidation";
import useRequireAuth from "../../../hooks/useRequireAuth";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../../utils/dateTimeFormatter";
import EditorSidebarTab from "./EditorSidebarTab";

export default function EditorSidebar({ onValidate, onUpdateDraft }) {
  const auth = useRequireAuth();
  const [isEditor, setIsEditor] = useState(true);

  const handleSidebarTab = (value) => {
    setIsEditor(value);
  };

  return (
    <section
      id="newsDraftEditSidebar"
      className="w-full bg-gray-700 overflow-y-auto "
    >
      <div className="flex mb-6 px-6 pt-6">
        <AccountCircle className="w-16 h-16 text-white" />
        <div className="px-4">
          <p className="text-white text-base font-bold">{auth.username}</p>
          <p className="text-white text-sm font-normal">{auth.email}</p>
        </div>
      </div>
      <div className="flex mb-4 items-end">
        <button
          onClick={() => {
            handleSidebarTab(true);
          }}
        >
          <p
            className={`text-white px-8 font-semibold text-base pb-2  ${
              isEditor
                ? "border-b-4 border-sky-400"
                : "text-gray-200 border-white border-b pb-3"
            } `}
          >
            Editor
          </p>
        </button>
        <button
          onClick={() => {
            handleSidebarTab(false);
          }}
        >
          <p
            className={`text-white px-8 font-semibold text-base pb-2 ${
              isEditor
                ? "text-gray-200 pb-3 border-white border-b"
                : "border-b-4 border-sky-400"
            } `}
          >
            Komentar
          </p>
        </button>
        <div className="border-b h-2 w-full" />
      </div>
      {isEditor && (
        <EditorSidebarTab
          onValidate={onValidate}
          onUpdateDraft={onUpdateDraft}
        />
      )}
    </section>
  );
}
