import { ActionType } from "./action";

function activitiesReducer(data = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_ACTIVITIES:
      return action.payload.data;
    default:
      return data;
  }
}

export default activitiesReducer;
