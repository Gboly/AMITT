import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import { isDev } from "../util/function";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: isDev,
});
