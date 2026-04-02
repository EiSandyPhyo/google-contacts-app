import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/users/",
  }),
  tagTypes: ["auth"],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "login", /* `/login` */
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    /* logout: builder.mutation({
      query: (token) => ({
        url: "user-logout",  `/user-logout` 
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["auth"],
    }), */
  }),
});

export const { useLoginMutation } =
  authApi; /* export const { useLoginMutation, useLogoutMutation } = authApi; */
