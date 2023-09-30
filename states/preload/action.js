import api from "../../utils/api";
import {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
} from "../auth/action";

const ActionType = {
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

function setPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(unsetAuthUserActionCreator());
    }
    dispatch(setPreloadActionCreator(false));
  };
}

export { ActionType, setPreloadActionCreator, asyncPreloadProcess };
