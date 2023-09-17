import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { toast } from "react-toastify";

const ActionType = {
  SET_VALIDATE_DRAFT: "SET_VALIDATE_DRAFT",
  UNSET_VALIDATE_DRAFT: "UNSET_VALIDATE_DRAFT",
};

function setValidateDraftActionCreator({ validationData }) {
  return {
    type: ActionType.SET_VALIDATE_DRAFT,
    payload: {
      validationData,
    },
  };
}

function clearValidationDraftActionCreator() {
  return {
    type: ActionType.UNSET_VALIDATE_DRAFT,
  };
}

function asyncReceiveValidationData({ draft_id, version, information }) {
  return async (dispatch) => {
    dispatch(clearValidationDraftActionCreator());
    dispatch(showLoading());

    try {
      const validationData = await api.validateNewsDraft({
        draft_id,
        version,
        information,
      });
      dispatch(setValidateDraftActionCreator({ validationData }));
      toast.success("Berhasil Validasi Berita", {
        position: toast.POSITION.TOP_CENTER,
      });
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
  setValidateDraftActionCreator,
  clearValidationDraftActionCreator,
  asyncReceiveValidationData,
};
