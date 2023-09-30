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
      const listNewsDraft = await api.getAllNewsDraft({ limit: 5 });
      const data =
        listNewsDraft.length > 5 ? listNewsDraft.slice(0, 5) : listNewsDraft;
      dispatch(
        receiveOverviewNewsDraftActionCreator({
          listNewsDraft: data,
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
