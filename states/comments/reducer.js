import { ActionType } from "./action";

function commentListReducer(CommentListData = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENT_LIST:
      return action.payload.CommentListData;
    default:
      return CommentListData;
  }
}

export default commentListReducer;
