import { ActionType } from "./action";

function newsDraftReducer(listNewsDraft = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_NEWS_DRAFT:
      return action.payload.listNewsDraft;
    default:
      return listNewsDraft;
  }
}

export default newsDraftReducer;
