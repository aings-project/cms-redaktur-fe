import { ArrowBackOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function CommentPostLayout({ title, content, dateTime }) {
  const router = useRouter();

  return (
    <div className="bg-neutral-100 w-full min-w-min">
      <div className="bg-white max-w-screen-lg mx-auto p-6 h-full overflow-y-auto">
        <button className="flex items-center" onClick={() => router.push("/")}>
          <div className="mb-6 mr-6 md:hidden">
            <ArrowBackOutlined />
          </div>
          <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
        </button>

        <div className="border-2 bg-white p-4 rounded-md mb-4 overflow-y-auto">
          <p className="text-2xl font-semibold mb-2">{title}</p>
          <p className="mb-4">{dateTime}</p>
          <ReactMarkdown className="hover:cursor-default bg-white">
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
