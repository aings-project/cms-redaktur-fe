import React, { useEffect, useState } from "react";
import CommentItem from "../../comments/CommentItem";
import ReactLoading from "react-loading";
import { asyncReceiveCommentList } from "../../../states/comments/action";
import { Send } from "@mui/icons-material";
import useInput from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import useRequireAuth from "../../../hooks/useRequireAuth";

export default function CommentSidebarTab({ id }) {
  const commentData = useSelector((state) => state.comments);
  const isLoading = useSelector((state) => state.loading);
  const auth = useRequireAuth();
  const dispatch = useDispatch();
  const [content, setContent, forceSetContent] = useInput("");
  const [commentList, setCommentList] = useState([]);

  const isLastPage = commentData.current_page === commentData.total_pages;

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
    <div className="bg-gray-700  w-full flex flex-col">
      <div className="flex flex-col mx-4">
        {isLoading && (
          <div className="p-2 w-full flex justify-center">
            <ReactLoading type="spin" height={24} width={24} />
          </div>
        )}
        {commentList.length > 0 && (
          <div className="overflow-y-auto pb-4 lg:overflow-y-auto flex flex-col-reverse">
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
                <p className="md:text-white pt-2">Muat Komentar Lama</p>
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
