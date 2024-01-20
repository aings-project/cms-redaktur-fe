import { CommentActionType, CommentActionCreator, CommentResponse } from "./action";

function commentListReducer(commentData : CommentResponse | null = null, action : CommentActionCreator) : CommentResponse | null {
  switch (action.type) {
    case CommentActionType.RECEIVE_COMMENT_LIST:
      return action.payload.commentData;
    default:
      return commentData;
  }
}

export default commentListReducer;
