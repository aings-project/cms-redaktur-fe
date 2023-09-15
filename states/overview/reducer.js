import { ActionType } from "./action";

function newsDraftOverviewReducer(listNewsDraft = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_OVERVIEW_NEWS_DRAFT:
      return action.payload.listNewsDraft;
    default:
      return listNewsDraft;
  }
}

export default newsDraftOverviewReducer;
