import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authorizeRequest, baseUrl } from "../../config/config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    ...authorizeRequest(),
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
    loginWithCredentials: builder.mutation({
      query: (body) => ({
        url: "auth",
        method: "POST",
        body,
      }),
    }),
    modifyUser: builder.mutation({
      query: (body) => ({
        url: "auth",
        method: "PUT",
        body,
      }),
    }),
    deleteUser: builder.mutation({
      query: (body) => ({
        url: "auth",
        method: "DELETE",
        body,
      }),
    }),
    getUserDetails: builder.query({
      query: () => "users/me",
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginWithCredentialsMutation,
  useModifyUserMutation,
  useDeleteUserMutation,
  useGetUserDetailsQuery,
} = authApi;
