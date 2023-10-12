import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function CommentPostLayout({ title, content }) {
  return (
    <div className="bg-neutral-100 w-full min-w-min">
      <div className="bg-white max-w-screen-lg mx-auto p-6 h-full overflow-y-auto">
        <div className="flex items-center">
          <div className="mb-6 mr-6 md:hidden">
            <ArrowBackOutlined />
          </div>
          <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
        </div>

        <div className="border-2 bg-white p-4 rounded-md mb-4 overflow-y-auto">
          <p className="text-2xl font-semibold mb-2">{title}</p>
          <ReactMarkdown className="hover:cursor-default bg-white">
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}