import { ActionType } from "./action";

function searchQueryReducer(title = null, action = {}) {
  switch (action.type) {
    case ActionType.SEARCH_QUERY:
      return action.payload.title;
    default:
      return title;
  }
}

export default searchQueryReducer;
