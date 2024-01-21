import React from "react";

export default function EditorInfo({ title, content }) {
  return (
    <div className="mb-2 flex justify-between items-start">
      <p className="text-black text-sm mb-1 mr-2">{title}</p>
      <p className="text-black text-sm text-end">{content}</p>
    </div>
  );
}
