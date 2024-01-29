import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import { isDev } from "../util/function";
import { applicationReducer } from "./applicationSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    application: applicationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: isDev,
});
