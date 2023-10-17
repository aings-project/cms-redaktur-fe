import React from "react";
import CommentItemFromOther from "./CommentItemFromOther";
import CommentItemFromUser from "./CommentItemFromUser";
import { Send } from "@mui/icons-material";
import useRequireAuth from "../../hooks/useRequireAuth";
import useInput from "../../hooks/useInput";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function CommentContainerLayout({ comments, onPostComment }) {
  const isLoading = useSelector((state) => state.loading);
  const auth = useRequireAuth();
  const [content, setContent, forceSetContent] = useInput("");
  return (
    <div className="bg-white md:bg-slate-800 w-full md:min-w-0 md:w-3/5 lg:max-w-xl px-6 md:px-4 mx-auto md:h-full flex flex-col">
      <div className="flex flex-col md:h-full">
        <p className="font-semibold text-xl md:hidden">Komentar</p>
        <div className="mt-2 w-full bg-neutral-100 rounded-md border-2 border-neutral-300 flex items-center pr-4 mb-4">
          <input
            placeholder="Berikan komentar..."
            className="bg-neutral-100 p-4 w-full"
            value={content}
            onChange={setContent}
          />
          <button
            onClick={() => {
              onPostComment(content);
              forceSetContent("");
            }}
          >
            <Send />
          </button>
        </div>
        {isLoading && <ReactLoading type="spin" height={24} width={24} />}
        <div className="overflow-y-auto pb-4 lg:overflow-y-auto">
          {comments.map((item, index) => {
            return (
              <>
                {item.user_redaktur && (
                  <>
                    {item.user_redaktur.username !== auth.username && (
                      <CommentItemFromOther
                        content={item.content}
                        dateTime={item.created_at}
                        sender={item.user_redaktur.username}
                      />
                    )}
                    {item.user_redaktur.username === auth.username && (
                      <CommentItemFromUser
                        content={item.content}
                        dateTime={item.created_at}
                        sender={item.user_redaktur.username}
                      />
                    )}
                  </>
                )}
                {item.user_wartawan && (
                  <CommentItemFromOther
                    content={item.content}
                    dateTime={item.created_at}
                    sender={item.user_wartawan.username}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
