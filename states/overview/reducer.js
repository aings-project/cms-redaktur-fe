import { ActionType } from "./action";

function overviewReducer(overviewData = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_OVERVIEW_DATA:
      return action.payload.overviewData;
    default:
      return overviewData;
  }
}

export default overviewReducer;
