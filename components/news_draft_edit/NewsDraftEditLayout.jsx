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
          <div className="p-6 w-full flex flex-col max-h-screen max-w-screen-lg mx-auto bg-white">
            <button className="w-full flex" onClick={() => router.push("/")}>
              <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
            </button>
            <input
              className="w-full bg-white text-2xl font-semibold mb-4"
              value={
                "Gempabumi Tektonik M 6,3 di Laut Jawa (6 Februari 2020), Tidak Berpotensi Tsunami"
              }
              onChange={() => {}}
            />
            <Editor
              placeholder="Hello World"
              className="overflow-y-auto max-w-screen-lg mx-auto w-full bg-white flex-1 border"
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
