import { apiSlice } from "./api";

export const extendedContactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (credentials) => ({
        url: "/message",
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      transformResponse: (response) => response,
      invalidatesTags: [{ type: "Contact", id: "list" }],
    }),
  }),
});

export const { useSendMessageMutation } = extendedContactApiSlice;
