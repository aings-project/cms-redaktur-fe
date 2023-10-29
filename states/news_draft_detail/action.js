import NewsDraftModels from "../../models/NewsDraftModel";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";

const ActionType = {
  RECEIVE_NEWS_DRAFT_DETAIL: "RECEIVE_NEWS_DRAFT_DETAIL",
  CLEAR_NEWS_DRAFT_DETAIL: "CLEAR_NEWS_DRAFT_DETAIL",
};

function receiveNewsDraftDetailActionCreator({ newsDraft }) {
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
    dispatch(setIsLoading(true));
    dispatch(clearNewsDraftDetailActionCreator());

    try {
      const response = await api.getDetailNewsDraft({
        draft_id,
        version,
      });
      const newsDraft = NewsDraftModels(response);
      dispatch(receiveNewsDraftDetailActionCreator({ newsDraft }));
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
}

function asyncUpdateNewsDraft({
  title,
  content,
  status,
  id,
  version,
  draft_id,
}) {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      await api.updateNewsDraft({
        title,
        content,
        status,
        id,
      });
      const response = await api.getDetailNewsDraft({
        draft_id,
        version: parseInt(version) + 1,
      });
      const newsDraft = NewsDraftModels(response);
      dispatch(receiveNewsDraftDetailActionCreator({ newsDraft }));
      dispatch(setIsLoading(false));
      toast.success("Berhasil Memperbarui Berita", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      dispatch(setIsLoading(false));
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
}

export {
  ActionType,
  receiveNewsDraftDetailActionCreator,
  asyncReceiveNewsDraftDetail,
  asyncUpdateNewsDraft,
};
