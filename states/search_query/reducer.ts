import { SearchQueryActionCreator, SearchQueryActionType } from "./action";

function searchQueryReducer(title : string | null = null, action : SearchQueryActionCreator): string | null {
  switch (action.type) {
    case SearchQueryActionType.SEARCH_QUERY:
      return action.payload.data;
    default:
      return title;
  }
}

export default searchQueryReducer;
