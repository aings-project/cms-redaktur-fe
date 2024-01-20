import { Dispatch } from "react";

enum LoadingActionType {
  SET_IS_LOADING = "SET_IS_LOADING",
  UNSET_IS_LOADING = "UNSET_IS_LOADING",
};

type LoadingActionCreator = {
  type: LoadingActionType,
  payload: boolean
}

function setIsLoadingActionCreator() : LoadingActionCreator {
  return {
    type: LoadingActionType.SET_IS_LOADING,
    payload: true,
  };
}

function unsetIsLoadingActionCreator() : LoadingActionCreator {
  return {
    type: LoadingActionType.UNSET_IS_LOADING,
    payload: false,
  };
}

function setIsLoading(value: boolean) {
  return (dispatch: Dispatch<LoadingActionCreator>) => {
    if (value) {
      dispatch(setIsLoadingActionCreator());
    } else {
      dispatch(unsetIsLoadingActionCreator());
    }
  };
}

export {
  LoadingActionType,
  setIsLoading,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
};

export type {
  LoadingActionCreator,
}
