import NewsDraftModels from "../../models/NewsDraftModel";
import api from "../../utils/api";
import { toast } from "react-toastify";

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
    dispatch(clearNewsDraftDetailActionCreator());

    try {
      const response = await api.getDetailNewsDraft({
        draft_id,
        version,
      });
      const newsDraft = NewsDraftModels(response);
      dispatch(receiveNewsDraftDetailActionCreator({ newsDraft }));
    } catch (error) {
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
  onSuccess,
}) {
  return async (dispatch) => {
    try {
      const newsDraft = await api.updateNewsDraft({
        title,
        content,
        status,
        id,
      });
      dispatch(clearNewsDraftDetailActionCreator());
      newsDraft[`total_version`] = parseInt(version) + 1;
      dispatch(receiveNewsDraftDetailActionCreator({ newsDraft }));
      onSuccess(newsDraft[`total_version`]);

      toast.success("Berhasil Memperbarui Berita", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
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
