import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";

const ActionType = {
  RECEIVE_NEWS_DRAFT: "RECEIVE_NEWS_DRAFT",
};

function receiveNewsDraftActionCreator({ newsDraftData }) {
  return {
    type: ActionType.RECEIVE_NEWS_DRAFT,
    payload: {
      newsDraftData,
    },
  };
}

function asyncReceiveNewsDraft({ status = "new", page = "1" } = {}) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const newsDraftData = await api.getAllNewsDraft({ status, page });
      dispatch(receiveNewsDraftActionCreator({ newsDraftData }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

export { ActionType, asyncReceiveNewsDraft };
