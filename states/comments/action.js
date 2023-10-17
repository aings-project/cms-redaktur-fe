import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";

const ActionType = {
  RECEIVE_COMMENT_LIST: "RECEIVE_COMMENT_LIST",
};

function receiveCommentListActionCreator({ CommentListData }) {
  return {
    type: ActionType.RECEIVE_COMMENT_LIST,
    payload: {
      CommentListData,
    },
  };
}

function asyncReceiveCommentList({ page = "1", id } = {}) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const CommentListData = await api.getCommentList({ id, page });
      dispatch(
        receiveCommentListActionCreator({
          CommentListData: CommentListData.comments,
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

function asyncPostCommentList({ content, id_redaktur, id } = {}) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      await api.postComment({ id_redaktur, content, id });
      const CommentListData = await api.getCommentList({ id });
      dispatch(
        receiveCommentListActionCreator({
          CommentListData: CommentListData.comments,
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

export { ActionType, asyncReceiveCommentList, asyncPostCommentList };
