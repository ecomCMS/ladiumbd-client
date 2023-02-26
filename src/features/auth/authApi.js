import { apiSlice } from "../api/apiSlice";

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: "/users/login",
        method: "POST",
        body: { email, password },
      }),
      onQueryStarted: (args, { dispatch, queryFulfilled }) => {},
    }),
    userRegister: builder.mutation({
      query: ({ name, email, password, phone }) => ({
        url: "/users",
        method: "POST",
        body: { name, email, password, phone },
      }),
      onQueryStarted: (args, { dispatch, queryFulfilled }) => {},
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = authSlice;
