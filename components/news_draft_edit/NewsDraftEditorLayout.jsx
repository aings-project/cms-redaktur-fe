import React, { useEffect, useState } from "react";
import { Menu } from "@mui/icons-material";
import NewsDraftEditor from "./NewsDraftEditor";
import NewsDraftEditSidebar from "./NewsDraftEditSidebar";
import { useRouter } from "next/router";

export default function NewsDraftEditorLayout({
  auth,
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
    <div className="flex bg-neutral-50 h-screen overflow-y-auto max-h-screen">
      <div className="p-6 w-full flex flex-col max-h-screen max-w-screen-lg mx-auto bg-white">
        <div className="flex justify-between fixed md:relative z-20 top-0 left-0 right-0 px-6 py-4 md:px-0 md:py-0 md:mb-6">
          <button className="w-fit flex" onClick={() => router.push("/")}>
            <p className="text-black text-3xl font-extrabold">AINGS</p>
          </button>
          <button className="md:hidden" onClick={handleToggle}>
            <Menu />
          </button>
        </div>
        <NewsDraftEditor
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
        className={`${
          hideNavbar ? "hidden" : "flex sm:w-2/3 shadow-lg z-40"
        } md:flex w-full md:max-w-xs md:z-30 fixed right-0 md:static`}
      >
        <div className="h-screen w-full bg-slate-800 overflow-y-auto">
          <div className="md:hidden flex pt-6 px-6">
            <p className="text-white text-3xl font-extrabold sm:invisible">
              AINGS
            </p>
            <button className="flex justify-end w-full" onClick={handleToggle}>
              <Menu className="text-white" />
            </button>
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
              if (validationData) {
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
