import { NewsDraftActionType, NewsDraftActionCreator, NewsDraftResponse } from "./action";

function newsDraftReducer(newsDraftData : NewsDraftResponse | null = null, action : NewsDraftActionCreator ) : NewsDraftResponse | null {
  switch (action.type) {
    case NewsDraftActionType.RECEIVE_NEWS_DRAFT:
      return action.payload.data;
    default:
      return newsDraftData;
  }
}

export default newsDraftReducer;
