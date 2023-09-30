import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";

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
    dispatch(setIsLoading(true));
    try {
      const newsDraftData = await api.getAllNewsDraft({ limit: 5 });
      dispatch(
        receiveOverviewNewsDraftActionCreator({
          listNewsDraft: newsDraftData.draft_berita,
        })
      );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

export { ActionType, asyncReceiveOverviewNewsDraft };
