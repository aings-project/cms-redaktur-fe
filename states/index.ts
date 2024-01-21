import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";
import newsDraftReducer from "./news_draft/reducer";
import newsDraftDetailReducer from "./news_draft_detail/reducer";
import overviewReducer from "./overview/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import loadingReducer from "./loading/reducer";
import activitiesReducer from "./activities/reducer";
import commentListReducer from "./comments/reducer";
import searchQueryReducer from "./search_query/reducer";

const store = configureStore({
  reducer: {
    auth: authUserReducer,
    preload: preloadReducer,
    newsDraft: newsDraftReducer,
    newsDraftDetail: newsDraftDetailReducer,
    overview: overviewReducer,
    loadingBar: loadingBarReducer,
    loading: loadingReducer,
    activities: activitiesReducer,
    comments: commentListReducer,
    searchQuery: searchQueryReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
