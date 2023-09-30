import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";

const ActionType = {
  RECEIVE_NEWS_DRAFT: "RECEIVE_NEWS_DRAFT",
};

function receiveNewsDraftActionCreator({ listNewsDraft }) {
  return {
    type: ActionType.RECEIVE_NEWS_DRAFT,
    payload: {
      listNewsDraft,
    },
  };
}

function asyncReceiveNewsDraft({ status = "new", page = "1" } = {}) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const listNewsDraft = await api.getAllNewsDraft({ status, page });
      dispatch(receiveNewsDraftActionCreator({ listNewsDraft }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

export { ActionType, asyncReceiveNewsDraft };
