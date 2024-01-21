import React, { useEffect, useState } from "react";
import { ArrowBack, Close, Menu } from "@mui/icons-material";
import EditorBody from "./EditorBody";
import EditorSidebar from "./sidebar/EditorSidebar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { NewsDraftResponse, asyncUpdateNewsDraft } from "../../states/news_draft_detail/action";
import { RootState } from "../../states";
import { Dispatch } from "@reduxjs/toolkit";

type EditorLayoutProps = {
  newsDraft: NewsDraftResponse,
  showValidationModal: any,
  showValidationResult: any,
}

export default function EditorLayout({
  newsDraft,
  showValidationModal,
  showValidationResult,
} : EditorLayoutProps) {
  const router = useRouter();
  const dispatch : Dispatch<any> = useDispatch();
  const draft = newsDraft.draft_berita;

  const [content, setContent] = useState(draft.content ?? "");
  const [title, setTitle] = useState(draft.title);
  const [hideNavbar, setHideNavbar] = useState(true);

  const handleToggle = () => {
    setHideNavbar((prevState) => !prevState);
  };

  const onUpdateDraft = ({ id, content, title, status }) => {
    dispatch(
      asyncUpdateNewsDraft({
        title,
        content,
        status,
        id,
        version: draft.version,
        draft_id: draft.draft_id,
      })
    );
  };

  useEffect(() => {
    setContent(draft.content);
    setTitle(draft.title);
  }, [draft]);

  return (
    <div className="flex bg-neutral-50 h-[calc(100dvh)] overflow-y-auto">
      <div className="p-6 w-full flex flex-col max-w-screen-lg mx-auto bg-white">
        <div className="flex justify-between fixed md:relative z-10 top-0 left-0 right-0 px-6 py-3 md:px-0 md:py-0 md:mb-6 bg-white shadow-sm md:shadow-none">
          <button
            className="w-fit flex items-center justify-center"
            onClick={() => router.push("/news_draft")}
          >
            <ArrowBack className="mr-4" />
          </button>
          <p className="text-sky-800 text-3xl font-extrabold w-full justify-center flex">
            AINGS
          </p>
          <button className="md:hidden" onClick={handleToggle}>
            <Menu />
          </button>
        </div>
        <EditorBody
          newsDraft={newsDraft}
          title={title}
          content={content}
          onChange={(value) => {
            setContent(value);
          }}
          onTitleChange={(value) => {
            setTitle(value);
          }}
        />
      </div>
      <div
        className={`z-20 transition-transform duration-300 ${
          hideNavbar
            ? "translate-x-full md:translate-x-0"
            : "translate-x-0 flex shadow-lg"
        } md:flex w-full md:max-w-sm lg:max-w-md md:z-30 fixed right-0 md:static`}
      >
        <div className="w-full bg-white h-[calc(100dvh)] overflow-y-auto md:overflow-y-clip">
          <div className="md:hidden flex pt-6 px-6">
            <p className="text-sky-700 text-3xl font-extrabold md:invisible">
              AINGS
            </p>
            <button className="flex justify-end w-full" onClick={handleToggle}>
              <Close className="text-black" />
            </button>
          </div>
          <EditorSidebar
            newsDraft={newsDraft}
            onUpdateDraft={(status: string) => {
              onUpdateDraft({
                id: draft.id,
                status,
                content,
                title,
              });
            }}
            onValidate={() => {
              if (newsDraft.validation_result) {
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
