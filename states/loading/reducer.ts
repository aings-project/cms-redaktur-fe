import { LoadingActionCreator, LoadingActionType } from "./action";

function loadingReducer(value: boolean = false, action : LoadingActionCreator) : boolean {
  switch (action.type) {
    case LoadingActionType.SET_IS_LOADING:
      return true;
    case LoadingActionType.UNSET_IS_LOADING:
      return false;
    default:
      return false;
  }
}

export default loadingReducer;
