import { ActionType } from "./action";

function commentListReducer(commentData = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENT_LIST:
      return action.payload.commentData;
    default:
      return commentData;
  }
}

export default commentListReducer;
