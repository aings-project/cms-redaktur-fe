import React, { useState } from "react";
import useRequireAuth from "../../../hooks/useRequireAuth";
import EditorSidebarTab from "./EditorSidebarTab";
import CommentSidebarTab from "./CommentSidebarTab";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncClearCommentList,
  asyncReceiveCommentList,
} from "../../../states/comments/action";

export default function EditorSidebar({ onValidate, onUpdateDraft }) {
  const auth = useRequireAuth();
  const [isEditor, setIsEditor] = useState(true);
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const dispatch = useDispatch();

  const handleSidebarTab = (value) => {
    setIsEditor(value);
    if (!value) {
      dispatch(asyncClearCommentList());
      dispatch(asyncReceiveCommentList({ draftId: newsDraft.draft_id }));
    }
  };

  return (
    <div
      id="newsDraftEditSidebar"
      className="w-full bg-white flex flex-col md:h-[calc(100dvh)] justify-between border-l-2"
    >
      <div className="flex mb-6 px-6 pt-6">
        <div className="text-white bg-sky-600 px-4 py-2 text-xl rounded-md">
          {auth.username.substring(0, 1).toUpperCase()}
        </div>
        <div className="px-4">
          <p className="text-black text-base font-bold">{auth.username}</p>
          <p className="text-black text-sm font-normal">{auth.email}</p>
        </div>
      </div>
      <div className="flex items-end">
        <button
          onClick={() => {
            handleSidebarTab(true);
          }}
        >
          <p
            className={`px-8 font-semibold text-base pb-2  ${
              isEditor
                ? "text-sky-700 border-b-4 border-sky-400"
                : "text-gray-400 border-b-2 pb-3"
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
            className={`px-8 font-semibold text-base pb-2 ${
              isEditor
                ? "text-gray-400 pb-3 border-b-2"
                : "text-sky-700 border-b-4 border-sky-400"
            } `}
          >
            Komentar
          </p>
        </button>
        <div className="border-b-2 h-2 w-full" />
      </div>
      <div className="md:h-full md:overflow-y-auto">
        {isEditor && (
          <EditorSidebarTab
            onValidate={onValidate}
            onUpdateDraft={onUpdateDraft}
          />
        )}
        {!isEditor && (
          <CommentSidebarTab draftId={newsDraft.draft_id} id={newsDraft.id} />
        )}
      </div>
    </div>
  );
}
