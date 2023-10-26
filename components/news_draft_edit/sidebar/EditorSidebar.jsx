import React, { useState } from "react";
import useRequireAuth from "../../../hooks/useRequireAuth";
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
        <div className="text-white bg-sky-600 px-4 py-2 text-xl rounded-md">
          {auth.username.substring(0, 1).toUpperCase()}
        </div>
        <div className="px-4">
          <p className="text-white text-base font-bold">{auth.username}</p>
          <p className="text-white text-sm font-normal">{auth.email}</p>
        </div>
      </div>
      <div className="flex items-end">
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
