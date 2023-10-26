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
            className="w-full bg-white text-2xl font-bold mb-2 px-2 py-2 border-2 border-sky-300 focus:outline-2 focus:outline-sky-700 rounded-md"
            value={title}
            onChange={(event) => {
              onTitleChange(event.target.value);
            }}
          />
          <Editor
            placeholder={content}
            className="overflow-y-auto max-w-screen-lg mx-auto w-full bg-white flex-1 border-t-4 border-t-sky-700"
            onChange={(value) => {
              onChange(value);
            }}
          />
        </div>
      )}
    </div>
  );
}
