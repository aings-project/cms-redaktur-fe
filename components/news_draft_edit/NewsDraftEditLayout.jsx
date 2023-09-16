import React, { useEffect, useState } from "react";
import NewsDraftEditSidebar from "./NewsDraftEditSidebar";
import Editor from "../shared/Editor";
import { useRouter } from "next/router";
import ValidateModal from "./ValidateModal";

export default function NewsDraftEditLayout({ newsDraft }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    setText(newsDraft.draft_berita.content);
    setStatus(newsDraft.draft_berita.status);
    setTitle(newsDraft.draft_berita.title);
  }, [newsDraft]);

  return (
    <>
      <div className="bg-neutral-50 h-screen overflow-y-auto max-h-screen">
        <div className="flex">
          <div className="p-6 w-full flex flex-col max-h-screen max-w-screen-lg mx-auto bg-white">
            <button className="w-full flex" onClick={() => router.push("/")}>
              <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
            </button>
            <input
              className="w-full bg-white text-2xl font-semibold mb-4"
              value={title}
              onChange={(target) => {
                setTitle(target.value);
              }}
            />
            <Editor
              placeholder={newsDraft.draft_berita.content}
              className="overflow-y-auto max-w-screen-lg mx-auto w-full bg-white flex-1 border"
              onChange={(value) => {
                setText(value);
              }}
            />
          </div>
          <NewsDraftEditSidebar
            onSetStatus={(value) => setStatus(value)}
            status={status}
            isValid={isValid}
            isValidated={isValidated}
            maxVersion={newsDraft.total_version}
            version={newsDraft.draft_berita.version}
            onSetVersion={(value) => {
              router.push(
                `/news_draft/edit/${newsDraft.draft_berita.draft_id}/${value}`
              );
            }}
            markdown={text}
            onValidate={() => setShowModal(true)}
          />
        </div>
      </div>
      {showModal ? (
        <ValidateModal
          onClose={() => setShowModal(false)}
          onValidate={() => {
            setIsValidated(true);
            setIsValid(false);
            setShowModal(false);
          }}
        />
      ) : null}
    </>
  );
}
