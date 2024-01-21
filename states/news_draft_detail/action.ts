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
  Prompt: NewsPrompt | null;
};

type NewsPrompt = {
  id: number;
  content: string;
  created_at: string;
  draft_id: number;
}

type NewsDraftResponse = {
  draft_berita: NewsDraft;
  validation_result: any | null;
  total_version: number;
};

enum NewsDraftDetailActionType {
  RECEIVE_NEWS_DRAFT_DETAIL = "RECEIVE_NEWS_DRAFT_DETAIL",
  CLEAR_NEWS_DRAFT_DETAIL = "CLEAR_NEWS_DRAFT_DETAIL",
};

type NewsDraftDetailActionCreator = {
  type: NewsDraftDetailActionType,
  payload: {
    data: NewsDraftResponse | null,
  }
}

function receiveNewsDraftDetailActionCreator({ newsDraft } : {newsDraft : NewsDraftResponse}) : NewsDraftDetailActionCreator {
  return {
    type: NewsDraftDetailActionType.RECEIVE_NEWS_DRAFT_DETAIL,
    payload: {
      data: newsDraft,
    },
  };
}

function clearNewsDraftDetailActionCreator() : NewsDraftDetailActionCreator {
  return {
    type: NewsDraftDetailActionType.CLEAR_NEWS_DRAFT_DETAIL,
    payload: {
      data: null
    }
  };
}

function asyncReceiveNewsDraftDetail({ draft_id, version } : {draft_id: number, version: number}) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setIsLoading(true));
    dispatch(clearNewsDraftDetailActionCreator());

    try {
      const data : NewsDraftResponse = await api.getDetailNewsDraft({
        draft_id,
        version,
      });
      dispatch(receiveNewsDraftDetailActionCreator({ newsDraft: data }));
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
  return async (dispatch: Dispatch<any>) => {
    try {
      dispatch(setIsLoading(true));
      await api.updateNewsDraft({
        title,
        content,
        status,
        id,
      });
      const data : NewsDraftResponse = await api.getDetailNewsDraft({
        draft_id,
        version: parseInt(version) + 1,
      });
      dispatch(receiveNewsDraftDetailActionCreator({ newsDraft : data }));
      
      toast.success("Berhasil Memperbarui Berita", {
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

export {
  NewsDraftDetailActionType,
  receiveNewsDraftDetailActionCreator,
  asyncReceiveNewsDraftDetail,
  asyncUpdateNewsDraft,
};

export type {
  NewsDraftDetailActionCreator,
  NewsDraftResponse,
  NewsDraft,
  NewsPrompt,
}