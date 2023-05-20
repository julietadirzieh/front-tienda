import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";

export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/ui`,
  }),
  endpoints: (builder) => ({
    allPhotos: builder.query({
      query: () => "",
    }),
  }),
});

export const { useAllPhotosQuery } = bannerApi;
