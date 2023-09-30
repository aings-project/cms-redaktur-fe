import { ActionType } from "./action";

function newsDraftReducer(newsDraftData = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_NEWS_DRAFT:
      return action.payload.newsDraftData;
    default:
      return newsDraftData;
  }
}

export default newsDraftReducer;
