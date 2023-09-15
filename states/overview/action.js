import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { toast } from "react-toastify";

const ActionType = {
  RECEIVE_OVERVIEW_NEWS_DRAFT: "RECEIVE_OVERVIEW_NEWS_DRAFT",
};

function receiveOverviewNewsDraftActionCreator({ listNewsDraft }) {
  return {
    type: ActionType.RECEIVE_OVERVIEW_NEWS_DRAFT,
    payload: {
      listNewsDraft,
    },
  };
}

function asyncReceiveOverviewNewsDraft() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const listNewsDraft = await api.getAllNewsDraft();
      dispatch(receiveOverviewNewsDraftActionCreator(listNewsDraft));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveOverviewNewsDraft };
