import { apiSlice } from "../api";

export const extendedFsaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    joinFsa: builder.mutation({
      query: (credentials) => ({
        url: "/fsa",
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      transformResponse: (response) => {
        // response && localStorage.setItem("applicationId", response.id);
        return response;
      },
      invalidatesTags: [{ type: "Fsa", id: "list" }],
    }),
    // getApplicants: builder.query({
    //   query: (id) => `/application/${id}`,
    //   transformResponse: (response) => response,
    //   providesTag: (result) =>
    //     result && [
    //       { type: "Application", id: "list" },
    //       { type: "Application", id: result?._id },
    //     ],
    // }),
  }),
});

export const { useJoinFsaMutation } = extendedFsaApiSlice;
