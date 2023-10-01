import React from "react";

export default function NewsDraftEditSidebarInfo({ title, content }) {
  return (
    <div className="mb-4">
      <p className="text-white text-sm font-semibold mb-1">{title}</p>
      <p className="text-white text-sm">{content}</p>
    </div>
  );
}
