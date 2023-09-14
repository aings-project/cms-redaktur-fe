import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";

const store = configureStore({
  reducer: {
    auth: authUserReducer,
    preload: preloadReducer,
  },
});

export default store;
