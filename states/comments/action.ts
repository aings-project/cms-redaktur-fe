import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";
import { Dispatch } from "react";
import { UserData } from "../auth/action";

type Comment = {
  id: number;
  version_id: number;
  content: string;
  created_at: string;
  Draft_Berita: {
    version: number;
  };
  user_redaktur: UserData | null;
  user_wartawan: UserData | null;
};

type CommentResponse = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
  comments: Comment[];
};

enum CommentActionType {
  RECEIVE_COMMENT_LIST = "RECEIVE_COMMENT_LIST",
};

type CommentActionCreator = {
  type: CommentActionType,
  payload: {
    commentData: CommentResponse | null
  }
}


function receiveCommentListActionCreator({ commentData }) : CommentActionCreator {
  return {
    type: CommentActionType.RECEIVE_COMMENT_LIST,
    payload: {
      commentData,
    },
  };
}

function asyncReceiveCommentList({ page = "1", draftId = null } = {}) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setIsLoading(true));
    try {
      const commentData: CommentResponse = await api.getCommentList({ draftId, page });
      dispatch(
        receiveCommentListActionCreator({
          commentData,
        })
      );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

function asyncClearCommentList() {
  return async (dispatch) => {
    const commentData = {
      current_page: 1,
      items_per_page: 5,
      total_pages: 1,
      total_items: 0,
      comments: [],
    };
    dispatch(
      receiveCommentListActionCreator({
        commentData,
      })
    );
  };
}

function asyncPostCommentList({ content = null, id_redaktur = null, draftId = null, id = null } = {}) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setIsLoading(true));
    try {
      await api.postComment({ id_redaktur, content, id });
      const commentData : CommentResponse = await api.getCommentList({ draftId });
      dispatch(
        receiveCommentListActionCreator({
          commentData,
        })
      );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

export {
  CommentActionType,
  asyncReceiveCommentList,
  asyncPostCommentList,
  asyncClearCommentList,
};

export type {
  CommentActionCreator,
  CommentResponse,
  Comment
}
