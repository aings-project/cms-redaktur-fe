import React, { useState } from "react";
import NewsDraftEditSidebar from "./NewsDraftEditSidebar";
import Editor from "../shared/Editor";
import { useRouter } from "next/router";
import ValidateModal from "./ValidateModal";

export default function NewsDraftEditLayout() {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="bg-neutral-50 h-screen overflow-y-auto max-h-screen">
        <div className="flex">
          <div className="p-6 w-full flex flex-col max-h-screen">
            <button className="w-full flex" onClick={() => router.push("/")}>
              <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
            </button>
            <input
              className="w-full bg-neutral-50 text-2xl font-normal"
              value={
                "Pencemaran Udara di Daerah Jabodetabek Semakin Parah! Tercatat 1440 balita"
              }
              onChange={() => {}}
            />
            <div className="h-0.5 w-full bg-black" />
            <Editor
              placeholder="Hello World"
              className="overflow-y-auto max-w-screen-lg mx-auto w-full bg-white flex-1"
              onChange={(value) => {
                setText(value);
              }}
            />
          </div>
          <NewsDraftEditSidebar
            markdown={text}
            onValidate={() => setShowModal(true)}
          />
        </div>
      </div>
      {showModal ? (
        <ValidateModal
          onClose={() => setShowModal(false)}
          onValidate={() => setShowModal(false)}
        />
      ) : null}
    </>
  );
}
