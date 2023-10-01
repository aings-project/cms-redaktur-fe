import { toast } from "react-toastify";
import api from "../../utils/api";
import { setIsLoading } from "../loading/action";

const ActionType = {
  RECEIVE_ACTIVITIES: "RECEIVE_ACTIVITIES",
};

function receiveActivitiesActionCreator({ data }) {
  return {
    type: ActionType.RECEIVE_ACTIVITIES,
    payload: {
      data,
    },
  };
}

function asyncReceiveActivities({ page }) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await api.getAllActivities({ page });
      dispatch(receiveActivitiesActionCreator({ data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

export { ActionType, asyncReceiveActivities };
