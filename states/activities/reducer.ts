import { ActivityActionType, ActivityActionCreator, ActivityLogResponse } from "./action";

function activitiesReducer(data: ActivityLogResponse | null = null, action: ActivityActionCreator) : ActivityLogResponse | null {
  switch (action.type) {
    case ActivityActionType.RECEIVE_ACTIVITIES:
      return action.payload.data;
    default:
      return data;
  }
}

export default activitiesReducer;
