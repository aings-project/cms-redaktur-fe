import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";
import newsDraftReducer from "./news_draft/reducer";
import newsDraftDetailReducer from "./news_draft_detail/reducer";
import overviewReducer from "./overview/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import validationReducer from "./validation/reducer";
import loadingReducer from "./loading/reducer";
import activitiesReducer from "./activities/reducer";

const store = configureStore({
  reducer: {
    auth: authUserReducer,
    preload: preloadReducer,
    newsDraft: newsDraftReducer,
    newsDraftDetail: newsDraftDetailReducer,
    overview: overviewReducer,
    loadingBar: loadingBarReducer,
    validationData: validationReducer,
    loading: loadingReducer,
    activities: activitiesReducer,
  },
});

export default store;
