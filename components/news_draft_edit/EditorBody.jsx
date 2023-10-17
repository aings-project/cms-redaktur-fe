import React from "react";
import ReactMarkdown from "react-markdown";
import Editor from "../shared/Editor";

export default function EditorBody({
  content,
  onChange,
  isEditable,
  title,
  onTitleChange,
}) {
  return (
    <div className="h-screen overflow-y-auto pt-12 md:pt-0">
      {!isEditable && (
        <div className="border-2 bg-white p-4 rounded-md mb-4 overflow-y-auto ">
          <p className="text-2xl font-semibold mb-2">{title}</p>
          <ReactMarkdown className="hover:cursor-default bg-white">
            {content}
          </ReactMarkdown>
        </div>
      )}
      {isEditable && (
        <div>
          <input
            className="w-full bg-slate-50 text-xl font-normal mb-2 px-2 py-2 border-b-2 border-black rounded-t-md"
            value={title}
            onChange={(event) => {
              onTitleChange(event.target.value);
            }}
          />
          <Editor
            placeholder={content}
            className="overflow-y-auto max-w-screen-lg mx-auto w-full bg-white flex-1 border"
            onChange={(value) => {
              onChange(value);
            }}
          />
        </div>
      )}
    </div>
  );
}
