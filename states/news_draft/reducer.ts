import { NewsDraftActionType, NewsDraftActionCreator, ListNewsDraftResponse } from "./action";

function newsDraftReducer(newsDraftData : ListNewsDraftResponse | null = null, action : NewsDraftActionCreator ) : ListNewsDraftResponse | null {
  switch (action.type) {
    case NewsDraftActionType.RECEIVE_NEWS_DRAFT:
      return action.payload.data;
    default:
      return newsDraftData;
  }
}

export default newsDraftReducer;
