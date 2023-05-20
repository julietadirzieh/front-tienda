import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authorizeRequest, baseUrl } from "../../config/config";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    ...authorizeRequest(),
  }),
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: (params) => `product/${params.state}?limit=20&page=${params.page}`,
    }),
    allVariants: builder.query({
      query: (id) => `variant/product/${id}`,
    }),
    productsByCategory: builder.mutation({
      query: (params) => ({
        url: `product/${params.state}/category/${params.id}?limit=150&page=${params.page}`,
        method: "GET",
      }),
    }),
    productById: builder.query({
      query: (params) => ({
        url: `product/${params.state}/${params.id}`,
        method: "GET",
      }),
    }),
    productsSearch: builder.mutation({
      query: (params) => ({
        url: `product/search?name=${params.input}`,
        method: "GET",
      }),
    }),
    productsSearchNavbar: builder.mutation({
      query: (params) => ({
        url: `product/search?name=${params.input}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAllProductsQuery,
  useAllVariantsQuery,
  useProductsByCategoryMutation,
  useProductByIdQuery,
  useProductsSearchMutation,
  useProductsSearchNavbarMutation,
} = productsApi;
