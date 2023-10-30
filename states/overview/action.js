import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";
import { NewsDraftCountByStatusModel } from "../../models/NewsDraftCountByStatusModel";

const ActionType = {
  RECEIVE_OVERVIEW_DATA: "RECEIVE_OVERVIEW_DATA",
};

function receiveOverviewActionCreator({ overviewData }) {
  return {
    type: ActionType.RECEIVE_OVERVIEW_DATA,
    payload: {
      overviewData,
    },
  };
}

function asyncReceiveOverviewData() {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const newsDraftData = await api.getAllNewsDraft({
        limit: 5,
        status: "new",
      });
      const activitiesData = await api.getAllActivities({ limit: 5 });
      const draftCount = await api.getNewsDraftCount();

      dispatch(
        receiveOverviewActionCreator({
          overviewData: {
            lastEdited: newsDraftData.draft_berita,
            activityLogs: activitiesData.activity_logs,
            draftCount: NewsDraftCountByStatusModel(draftCount),
          },
        })
      );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

export { ActionType, asyncReceiveOverviewData };
