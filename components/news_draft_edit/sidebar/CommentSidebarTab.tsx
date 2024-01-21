import React, { Dispatch, useEffect, useState } from "react";
import CommentItem from "../../comments/CommentItem";
import ReactLoading from "react-loading";
import {
  CommentResponse,
  asyncPostCommentList,
  asyncReceiveCommentList,
} from "../../../states/comments/action";
import { Send } from "@mui/icons-material";
import useInput from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import useRequireAuth from "../../../hooks/useRequireAuth";
import { RootState } from "../../../states";
import { NewsDraftResponse } from "../../../states/news_draft_detail/action";

type CommentSidebarTabType = {
  id: number,
  draft_id: number
}

export default function CommentSidebarTab({ id, draft_id } : CommentSidebarTabType) {
  const commentData : CommentResponse = useSelector((state: RootState) => state.comments);
  const isLoading = useSelector((state: RootState) => state.loading);
  const auth = useRequireAuth();
  const dispatch : Dispatch<any> = useDispatch();
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
        draftId: draft_id,
      })
    );
  };

  const onPostComment = (content) => {
    dispatch(
      asyncPostCommentList({
        content,
        id_redaktur: auth.id,
        id,
        draftId: draft_id,
      })
    );
  };

  return (
    <div className="bg-white  w-full flex flex-col">
      <div className="flex flex-col mx-4">
        {isLoading && (
          <div className="p-2 w-full flex justify-center">
            <ReactLoading type="spin" color="black" height={24} width={24} />
          </div>
        )}
        {commentList.length > 0 && (
          <div className="overflow-y-auto pb-4 lg:overflow-y-auto flex flex-col-reverse">
            {commentList.map((item, index) => {
              const content = `(versi ${item.Draft_Berita.version}) ${item.content}`;
              return (
                <>
                  {item.user_redaktur && (
                    <CommentItem
                      content={content}
                      dateTime={item.created_at}
                      sender={item.user_redaktur.username}
                    />
                  )}
                  {item.user_wartawan && (
                    <CommentItem
                      content={item.content}
                      dateTime={item.created_at}
                      sender={`${item.user_wartawan.username} (wartawan)`}
                    />
                  )}
                </>
              );
            })}
            {!isLastPage && (
              <button
                className="mt-2 bg-sky-100 rounded-md"
                onClick={() => {
                  onLoadMoreComments();
                }}
              >
                <p className="text-black p-2 font-bold">Muat Komentar Lama</p>
              </button>
            )}
          </div>
        )}
        {commentList.length === 0 && (
          <p className="text-center py-4">Belum ada komentar</p>
        )}
        <div className="mt-2 w-full bg-wgite rounded-md border-2 border-neutral-300 flex items-center pr-4 mb-4">
          <textarea
            placeholder="Berikan komentar..."
            className="bg-white p-4 w-full focus:outline-none"
            value={content}
            onChange={setContent}
          />
          <button
            className="CommentSendButton"
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
