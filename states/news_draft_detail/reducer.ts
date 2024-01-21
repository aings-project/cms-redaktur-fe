import { NewsDraftDetailActionCreator, NewsDraftDetailActionType } from "./action";

function newsDraftDetailReducer(newsDraft : any = null, action : NewsDraftDetailActionCreator) {
  switch (action.type) {
    case NewsDraftDetailActionType.RECEIVE_NEWS_DRAFT_DETAIL:
      return action.payload.data;
    case NewsDraftDetailActionType.CLEAR_NEWS_DRAFT_DETAIL:
      return null;
    default:
      return newsDraft;
  }
}

export default newsDraftDetailReducer;
