import api from "../../utils/api";
import { toast } from "react-toastify";
import { setIsLoading } from "../loading/action";
import { Dispatch } from "react";
import { UserData } from "../auth/action";

type NewsDraft = {
  id: number;
  draft_id: number;
  version: number;
  title: string;
  category: string | null;
  created_at: string;
  status: string;
  published_at: string | null;
  user_redaktur: UserData | null;
  user_wartawan: UserData | null;
  content: string;
  Prompt: {
    id: number;
    content: string;
    created_at: string;
    draft_id: number;
  } | null;
};

type NewsDraftResponse = {
  draft_berita: NewsDraft;
  validation_result: any | null; // Change 'any' to a specific type if validation_result has a predictable structure
  total_version: number;
};

enum NewsDraftActionType {
  RECEIVE_NEWS_DRAFT = "RECEIVE_NEWS_DRAFT",
};

type NewsDraftActionCreator = {
  type: NewsDraftActionType,
  payload: {
    data: NewsDraftResponse
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
      const newsDraftData : NewsDraftResponse = await api.getAllNewsDraft({ status, page, title });
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
  NewsDraftResponse
}
