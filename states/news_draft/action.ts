import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";
import { Dispatch } from "react";
import { UserData } from "../auth/action";

type NewsDraftItem = {
  id: number;
  draft_id: number;
  version: number;
  title: string;
  category: string;
  created_at: string;
  status: string;
  published_at: string | null;
  user_redaktur: UserData | null;
  user_wartawan: UserData;
};

type ListNewsDraftResponse = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
  draft_berita: NewsDraftItem[];
};


enum NewsDraftActionType {
  RECEIVE_NEWS_DRAFT = "RECEIVE_NEWS_DRAFT",
};

type NewsDraftActionCreator = {
  type: NewsDraftActionType,
  payload: {
    data: ListNewsDraftResponse | null
  }
}

function receiveNewsDraftActionCreator({ newsDraftData }): NewsDraftActionCreator {
  return {
    type: NewsDraftActionType.RECEIVE_NEWS_DRAFT,
    payload: {
      data: newsDraftData,
    },
  };
}

function asyncReceiveNewsDraft({ status = null, page = "1", title = null } = {}) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setIsLoading(true));
    try {
      const newsDraftData : ListNewsDraftResponse = await api.getAllNewsDraft({ status, page, title });
      dispatch(receiveNewsDraftActionCreator({ newsDraftData }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

export { NewsDraftActionType, asyncReceiveNewsDraft };

export type {
  NewsDraftActionCreator,
  ListNewsDraftResponse
}
