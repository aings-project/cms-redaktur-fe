import { ActionType } from "./action";

function newsDraftDetailReducer(newsDraft = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_NEWS_DRAFT_DETAIL:
      return action.payload.newsDraftDetail;
    case ActionType.CLEAR_NEWS_DRAFT_DETAIL:
      return null;
    default:
      return newsDraft;
  }
}

export default newsDraftDetailReducer;
