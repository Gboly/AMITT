import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isDev } from "../util/function";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: isDev && "http://localhost:5000",
    //: "https://wcim-backend.vercel.app",
  }),
  tagTypes: ["Application"],
  endpoints: () => ({}),
});
