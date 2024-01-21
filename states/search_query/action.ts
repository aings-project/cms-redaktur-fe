import { Dispatch } from "react";

enum SearchQueryActionType {
  SEARCH_QUERY = "SEARCH_QUERY",
};

type SearchQueryActionCreator = {
  type: SearchQueryActionType,
  payload: {
    data: string,
  }
}

function setSearchQueryActionCreator({ title } : {title: string}) : SearchQueryActionCreator {
  return {
    type: SearchQueryActionType.SEARCH_QUERY,
    payload: {
      data: title,
    },
  };
}

function setSearchQuery({ title } : {title: string}) {
  return async (dispatch : Dispatch<SearchQueryActionCreator>) => {
    dispatch(setSearchQueryActionCreator({ title }));
  };
}

export { SearchQueryActionType, setSearchQuery };
export type {SearchQueryActionCreator}
