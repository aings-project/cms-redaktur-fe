import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { toast } from "react-toastify";

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

function asyncReceiveNewsDraft() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const listNewsDraft = await api.getAllNewsDraft();
      dispatch(receiveNewsDraftActionCreator({ listNewsDraft }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveNewsDraft };
