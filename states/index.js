import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";
import newsDraftReducer from "./news_draft/reducer";
import newsDraftDetailReducer from "./news_draft_detail/reducer";
import newsDraftOverviewReducer from "./overview/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import validationReducer from "./validation/reducer";

const store = configureStore({
  reducer: {
    auth: authUserReducer,
    preload: preloadReducer,
    newsDraft: newsDraftReducer,
    newsDraftDetail: newsDraftDetailReducer,
    newsDraftOverview: newsDraftOverviewReducer,
    loadingBar: loadingBarReducer,
    validationData: validationReducer,
  },
});

export default store;
