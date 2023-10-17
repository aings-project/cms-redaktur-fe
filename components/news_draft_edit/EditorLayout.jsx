import React, { useEffect, useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import EditorBody from "./EditorBody";
import EditorSidebar from "./EditorSidebar";
import { useRouter } from "next/router";

export default function EditorLayout({
  onUpdateDraft,
  isEditable,
  newsDraft,
  validationData,
  showValidationModal,
  showValidationResult,
}) {
  const router = useRouter();
  const [content, setContent] = useState(newsDraft.draft_berita.content);
  const [title, setTitle] = useState(newsDraft.draft_berita.title);
  const [hideNavbar, setHideNavbar] = useState(true);

  const handleToggle = () => {
    setHideNavbar((prevState) => !prevState);
  };

  useEffect(() => {
    setContent(newsDraft.draft_berita.content);
    setTitle(newsDraft.draft_berita.title);
  }, [newsDraft]);

  return (
    <div className="flex bg-neutral-50 h-[calc(100dvh)] overflow-y-auto">
      <div className="p-6 w-full flex flex-col max-w-screen-lg mx-auto bg-white">
        <div className="flex justify-between fixed md:relative z-10 top-0 left-0 right-0 px-6 py-3 md:px-0 md:py-0 md:mb-6 bg-white shadow-md md:shadow-none">
          <button className="w-fit flex" onClick={() => router.push("/")}>
            <p className="text-black text-3xl font-extrabold">AINGS</p>
          </button>
          <button className="md:hidden" onClick={handleToggle}>
            <Menu />
          </button>
        </div>
        <EditorBody
          title={title}
          content={content}
          isEditable={isEditable}
          onChange={(value) => {
            setContent(value);
          }}
          onTitleChange={(value) => {
            setTitle(value);
          }}
        />
      </div>
      <div
        className={`z-40 transition-transform duration-300 ${
          hideNavbar
            ? "translate-x-full md:translate-x-0"
            : "translate-x-0 flex sm:w-2/3 shadow-lg"
        } md:flex w-full md:max-w-xs md:z-30 fixed right-0 md:static`}
      >
        <div className="h-[calc(100dvh)] w-full bg-slate-800 overflow-y-auto">
          <div className="md:hidden flex pt-6 px-6">
            <p className="text-white text-3xl font-extrabold sm:invisible">
              AINGS
            </p>
            <button className="flex justify-end w-full" onClick={handleToggle}>
              <Close className="text-white" />
            </button>
          </div>
          <EditorSidebar
            markdown={content}
            onUpdateDraft={(status) => {
              onUpdateDraft({
                id: newsDraft.draft_berita.id,
                status,
                content,
                title,
              });
            }}
            onValidate={() => {
              if (validationData.length > 0) {
                showValidationResult(true);
              } else {
                showValidationModal(true);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}