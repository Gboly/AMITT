import { apiSlice } from "./api";

export const extendedApplicationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createApplication: builder.mutation({
      query: (credentials) => ({
        url: "/application",
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      transformResponse: (response) => response,
      invalidatesTags: [{ type: "Application", id: "list" }],
    }),
    getApplication: builder.query({
      query: (id) => `/application/${id}`,
      transformResponse: (response) => response,
      providesTag: (result) =>
        result && [
          { type: "Application", id: "list" },
          { type: "Application", id: result?._id },
        ],
    }),
  }),
});

export const { useCreateApplicationMutation, useGetApplicationQuery } =
  extendedApplicationApiSlice;
