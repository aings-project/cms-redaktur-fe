const ActionType = {
  SEARCH_QUERY: "SEARCH_QUERY",
};

function setSearchQueryActionCreator({ title }) {
  return {
    type: ActionType.SEARCH_QUERY,
    payload: {
      title,
    },
  };
}

function setSearchQuery({ title } = {}) {
  return async (dispatch) => {
    dispatch(setSearchQueryActionCreator({ title }));
  };
}

export { ActionType, setSearchQuery };
