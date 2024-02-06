import { apiSlice } from "../api";

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
    subscribeToNewsletter: builder.mutation({
      query: (credentials) => ({
        url: "/newsletter/subscribe",
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      transformResponse: (response) => response,
      invalidatesTags: [{ type: "Contact", id: "newsletter" }],
    }),
  }),
});

export const { useSendMessageMutation, useSubscribeToNewsletterMutation } =
  extendedContactApiSlice;
