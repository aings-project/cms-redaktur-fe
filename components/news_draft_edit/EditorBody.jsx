import React from "react";
import ReactMarkdown from "react-markdown";
import Editor from "../shared/Editor";
import { useSelector } from "react-redux";

export default function EditorBody({
  content,
  onChange,
  title,
  onTitleChange,
}) {
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const isEditable =
    (newsDraft.status === "reviewing" || newsDraft.status === "new") &&
    newsDraft.version === newsDraft.maxVersion;

  return (
    <div className="h-screen overflow-y-auto pt-12 md:pt-0">
      {!isEditable && (
        <div className="bg-white p-4 rounded-md mb-4 overflow-y-auto ">
          <p className="text-2xl font-bold mb-4">{title}</p>
          <ReactMarkdown className="hover:cursor-default bg-white prose">
            {content}
          </ReactMarkdown>
        </div>
      )}
      {isEditable && (
        <div>
          <p className="font-semibold">Judul Berita</p>
          <input
            className="EditorBodyTitleInput w-full bg-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold mb-2 px-2 pt-2 border-none focus:outline-none rounded-md"
            value={title}
            onChange={(event) => {
              onTitleChange(event.target.value);
            }}
          />
          <div className="w-full border-t-2 border-sky-700 pb-2" />
          <Editor
            placeholder={content}
            className="overflow-y-auto max-w-screen-lg mx-auto w-full bg-white flex-1"
            onChange={(value) => {
              onChange(value);
            }}
          />
        </div>
      )}
    </div>
  );
}
