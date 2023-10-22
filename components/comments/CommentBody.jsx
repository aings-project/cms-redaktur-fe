import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { Send } from "@mui/icons-material";
import useRequireAuth from "../../hooks/useRequireAuth";
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { asyncReceiveCommentList } from "../../states/comments/action";

export default function CommentBody({ onPostComment, id }) {
  const commentData = useSelector((state) => state.comments);
  const isLoading = useSelector((state) => state.loading);
  const auth = useRequireAuth();
  const dispatch = useDispatch();

  const isLastPage = commentData.current_page === commentData.total_pages;

  const [content, setContent, forceSetContent] = useInput("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const comments = commentData.comments ?? [];
    if (commentData.current_page === 1) {
      setCommentList(comments);
    } else {
      setCommentList((c) => c.concat(comments));
    }
  }, [commentData]);

  const onLoadMoreComments = () => {
    dispatch(
      asyncReceiveCommentList({
        page: commentData.current_page + 1,
        id,
      })
    );
  };

  return (
    <div className="bg-white md:bg-slate-800 w-full md:min-w-0 md:w-3/5 lg:max-w-xl px-6 md:px-4 mx-auto md:h-full flex flex-col">
      <div className="flex flex-col md:h-full">
        <p className="font-semibold text-xl md:hidden">Komentar</p>
        {isLoading && (
          <div className="p-2 w-full flex justify-center">
            <ReactLoading type="spin" height={24} width={24} />
          </div>
        )}
        {commentList.length > 0 && (
          <div className="overflow-y-auto pb-4 lg:overflow-y-auto flex flex-col-reverse pr-4">
            {commentList.map((item, index) => {
              return (
                <>
                  {item.user_redaktur && (
                    <CommentItem
                      content={item.content}
                      dateTime={item.created_at}
                      sender={item.user_redaktur.username}
                    />
                  )}
                  {item.user_wartawan && (
                    <CommentItem
                      content={item.content}
                      dateTime={item.created_at}
                      sender={item.user_wartawan.username}
                    />
                  )}
                </>
              );
            })}
            {!isLastPage && (
              <button
                onClick={() => {
                  onLoadMoreComments();
                }}
              >
                <p className="text-white pt-2">Muat Komentar Lama</p>
              </button>
            )}
          </div>
        )}
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
      </div>
    </div>
  );
}
