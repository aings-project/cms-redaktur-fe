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
}) {
  const router = useRouter();
  const [content, setContent] = useState(newsDraft.draft_berita.content);
  const [title, setTitle] = useState(newsDraft.draft_berita.title);

  useEffect(() => {
    setContent(newsDraft.draft_berita.content);
    setTitle(newsDraft.draft_berita.title);
  }, [newsDraft]);

  return (
    <div className="flex bg-neutral-50 h-screen overflow-y-auto max-h-screen">
      <div className="p-6 w-full flex flex-col max-h-screen max-w-screen-lg mx-auto bg-white">
        <div className="flex justify-between fixed md:relative z-20 top-0 left-0 right-0 bg-white px-6 py-4 md:px-0 md:py-0 md:mb-6">
          <button className="w-fit flex" onClick={() => router.push("/")}>
            <p className="text-black text-3xl font-extrabold">AINGS</p>
          </button>
          <button className="md:hidden">
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
      <div className="flex w-full md:max-w-xs h-screen z-30 fixed top-16 md:static md:top-16">
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
              setShowValidationResult(true);
            } else {
              setShowValidationModal(true);
            }
          }}
        />
      </div>
    </div>
  );
}
