import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";
import { asyncReceiveNewsDraftDetail } from "../news_draft_detail/action";
import { Dispatch } from "react";

function asyncReceiveValidationData({
  draft_id,
  version,
  information,
  onSuccess,
}) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setIsLoading(true));

    try {
      await api.validateNewsDraft({
        draft_id,
        version,
        information,
      });
      dispatch(asyncReceiveNewsDraftDetail({ draft_id, version }));
      onSuccess();
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
