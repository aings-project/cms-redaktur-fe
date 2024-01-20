import { Dispatch } from "react";
import api from "../../utils/api";
import {
  UserData,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
} from "../auth/action";

enum PreloadActionType {
  SET_IS_PRELOAD = 'SET_IS_PRELOAD'
}

type PreloadActionCreator = {
  type : PreloadActionType,
  payload: {
    isPreload: boolean | null
  }
}

function setPreloadActionCreator(isPreload: boolean) : PreloadActionCreator {
  return {
    type: PreloadActionType.SET_IS_PRELOAD,
    payload: {
      isPreload: isPreload || null,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setPreloadActionCreator(true));
    try {
      const authUser: UserData = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(unsetAuthUserActionCreator());
    }
    dispatch(setPreloadActionCreator(false));
  };
}

export { PreloadActionType, setPreloadActionCreator, asyncPreloadProcess };

export type {
  PreloadActionCreator
}
