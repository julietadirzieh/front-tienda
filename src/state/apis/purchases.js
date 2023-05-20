import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authorizeRequest, baseUrl } from "../../config/config";

export const purchasesApi = createApi({
  reducerPath: "purchasesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    ...authorizeRequest(),
  }),
  endpoints: (builder) => ({
    newPurchase: builder.mutation({
      query: (body) => ({
        url: "purchase",
        method: "POST",
        body,
      }),
    }),
    cancelPurchase: builder.mutation({
      query: (body) => ({
        url: "purchase/cancel",
        method: "POST",
        body,
      }),
    }),
    getPurchasesHistory: builder.query({
      query: (page) => `purchase/history?limit=10&page=${page}`,
    }),
    repeatPurchase: builder.mutation({
      query: (id) => ({
        url: `purchase/${id}`,
        method: "GET",
        id,
      }),
    }),
    checkVoucher: builder.mutation({
      query: (body) => ({
        url: "voucher/check",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useNewPurchaseMutation,
  useCancelPurchaseMutation,
  useGetPurchasesHistoryQuery,
  useRepeatPurchaseMutation,
  useCheckVoucherMutation,
} = purchasesApi;
