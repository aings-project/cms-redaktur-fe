import React, { useEffect, useState } from "react";
import NewsDraftEditSidebar from "./NewsDraftEditSidebar";
import Editor from "../shared/Editor";
import { useRouter } from "next/router";
import ValidateModal from "./ValidateModal";
import ValidationResult from "./ValidationResultModal";
import { Menu } from "@mui/icons-material";
import ReactMarkdown from "react-markdown";

export default function NewsDraftEditLayout({
  newsDraft,
  validationData,
  auth,
  onValidate,
  onRevalidate,
  onUpdateDraft,
}) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [showValidationResult, setShowValidationResult] = useState(false);
  const router = useRouter();
  const isEditable =
    (newsDraft.draft_berita.status === "reviewing" ||
      newsDraft.draft_berita.status === "new") &&
    newsDraft.draft_berita.version === newsDraft.total_version;

  useEffect(() => {
    setText(newsDraft.draft_berita.content);
    setTitle(newsDraft.draft_berita.title);
    if (validationData) {
      setShowValidationModal(false);
    }
  }, [newsDraft, validationData]);

  return (
    <>
      <div className="bg-neutral-50 h-screen overflow-y-auto max-h-screen">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="p-6 w-full flex flex-col max-h-screen max-w-screen-lg mx-auto bg-white">
            <div className="flex">
              <button className="w-full flex" onClick={() => router.push("/")}>
                <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
              </button>
              <a href="#newsDraftEditSidebar" className="md:hidden mb-6">
                <Menu />
              </a>
            </div>
            <input
              className="w-full bg-white text-2xl font-semibold mb-4"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            {!isEditable && (
              <div className="border-2 bg-white p-4 rounded-md mb-4 overflow-y-auto ">
                <ReactMarkdown className="hover:cursor-default bg-white">
                  {newsDraft.draft_berita.content}
                </ReactMarkdown>
              </div>
            )}
            {isEditable && (
              <Editor
                placeholder={newsDraft.draft_berita.content}
                className="overflow-y-auto max-w-screen-lg mx-auto w-full bg-white flex-1 border"
                onChange={(value) => {
                  setText(value);
                }}
              />
            )}
          </div>
          <NewsDraftEditSidebar
            auth={auth}
            status={newsDraft.draft_berita.status}
            version={newsDraft.draft_berita.version}
            onSetVersion={(value) => {
              router.push(
                `/news_draft/edit/${newsDraft.draft_berita.draft_id}/${value}`
              );
            }}
            maxVersion={newsDraft.total_version}
            validationData={validationData}
            markdown={text}
            onUpdateDraft={(status) => {
              onUpdateDraft({
                id: newsDraft.draft_berita.id,
                content: text,
                title,
                status,
              });
            }}
            onValidate={() => {
              if (validationData) {
                setShowValidationResult(true);
              } else {
                setShowValidationModal(true);
              }
            }}
          />
        </div>
      </div>
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
    </>
  );
}
