import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { toast } from "react-toastify";

const ActionType = {
  RECEIVE_NEWS_DRAFT_DETAIL: "RECEIVE_NEWS_DRAFT_DETAIL",
  CLEAR_NEWS_DRAFT_DETAIL: "CLEAR_NEWS_DRAFT_DETAIL",
};

function receiveNewsDraftDetailActionCreator(newsDraft) {
  return {
    type: ActionType.RECEIVE_NEWS_DRAFT_DETAIL,
    payload: {
      newsDraft,
    },
  };
}

function clearNewsDraftDetailActionCreator() {
  return {
    type: ActionType.CLEAR_NEWS_DRAFT_DETAIL,
  };
}

function asyncReceiveNewsDraftDetail({ draft_id, version }) {
  return async (dispatch) => {
    dispatch(clearNewsDraftDetailActionCreator());
    dispatch(showLoading());

    try {
      const detailNewsDraft = await api.getDetailNewsDraft({
        draft_id,
        version,
      });
      dispatch(receiveNewsDraftDetailActionCreator(detailNewsDraft));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(hideLoading());
  };
}

function asyncUpdateNewsDraft({ title, content, status, id }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const newsDraft = await api.updateNewsDraft({
        title,
        content,
        status,
        id,
      });
      dispatch(clearNewsDraftDetailActionCreator());
      dispatch(receiveNewsDraftDetailActionCreator(newsDraft));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveNewsDraftDetailActionCreator,
  asyncReceiveNewsDraftDetail,
  asyncUpdateNewsDraft,
};
