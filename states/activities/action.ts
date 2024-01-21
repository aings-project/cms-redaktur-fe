import { toast } from "react-toastify";
import api from "../../utils/api";
import { setIsLoading } from "../loading/action";
import { Dispatch } from "react";

enum ActivityActionType {
  RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES'
}

type ActivityLog = {
  model: string;
  subject: string;
  action: string;
  title: string;
  timestamp: string;
  object: {
    id: number;
    draft_id: number;
    version: number;
  };
};

type ActivityLogResponse = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
  activity_logs: ActivityLog[];
};

type ActivityActionCreator = {
  type: ActivityActionType,
  payload: {
    data: ActivityLogResponse
  }
}

function receiveActivitiesActionCreator({ data }: { data: ActivityLogResponse}): ActivityActionCreator {
  return {
    type: ActivityActionType.RECEIVE_ACTIVITIES,
    payload: {
      data: data || null,
    },
  };
}

function asyncReceiveActivities({ page, actions } : {page?: number, actions?: any}) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setIsLoading(true));
    try {
      const data: ActivityLogResponse = await api.getAllActivities({ page, actions });
      dispatch(receiveActivitiesActionCreator({ data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

export { ActivityActionType, asyncReceiveActivities };  
export type { ActivityActionCreator, ActivityLogResponse };

