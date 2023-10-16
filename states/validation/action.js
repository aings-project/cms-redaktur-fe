import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";

function asyncReceiveValidationData({
  draft_id,
  version,
  information,
  onSuccess,
}) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const validationData = await api.validateNewsDraft({
        draft_id,
        version,
        information,
      });
      onSuccess(validationData);
      toast.success("Berhasil Validasi Berita", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

export { asyncReceiveValidationData };
