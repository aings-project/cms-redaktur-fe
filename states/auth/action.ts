import { toast } from "react-toastify";
import api from "../../utils/api";
import { setIsLoading } from "../loading/action";
import { Dispatch } from "react";

enum AuthActionType {
  SET_AUTH_USER = 'SET_AUTH_USER',
  UNSET_AUTH_USER = 'UNSET_AUTH_USER',
}

type AuthActionCreator = {
  type: AuthActionType,
  payload: {
    authUser: UserData | null,
  }
}

type UserData = {
  id: number;
  email: string;
  username: string;
};

type LoginData = {
  user: UserData,
  jwt: {
    token: string,
  }
}

function setAuthUserActionCreator(authUser : UserData) : AuthActionCreator {
  return {
    type: AuthActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() : AuthActionCreator {
  return {
    type: AuthActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUser({ email, password, onSuccess }) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setIsLoading(true));
    try {
      const token : string = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser : UserData = await api.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
      onSuccess();
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setIsLoading(false));
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken("");
  };
}

export {
  AuthActionType,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
};

export type {
  AuthActionCreator,
  UserData,
  LoginData
}
