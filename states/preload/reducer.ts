import { PreloadActionType, PreloadActionCreator } from "./action";

function preloadReducer(isPreload = true, action : PreloadActionCreator): boolean {
  switch (action.type) {
    case PreloadActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
}

export default preloadReducer;
