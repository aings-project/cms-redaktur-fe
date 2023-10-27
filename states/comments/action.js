import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";

const ActionType = {
  RECEIVE_COMMENT_LIST: "RECEIVE_COMMENT_LIST",
};

function receiveCommentListActionCreator({ commentData }) {
  return {
    type: ActionType.RECEIVE_COMMENT_LIST,
    payload: {
      commentData,
    },
  };
}

function asyncReceiveCommentList({ page = "1", id } = {}) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const commentData = await api.getCommentList({ id, page });
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

function asyncPostCommentList({ content, id_redaktur, id } = {}) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      await api.postComment({ id_redaktur, content, id });
      const commentData = await api.getCommentList({ id });
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
  ActionType,
  asyncReceiveCommentList,
  asyncPostCommentList,
  asyncClearCommentList,
};
