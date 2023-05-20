import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth";
import { productsApi } from "./apis/products";
import { categoriesApi } from "./apis/categories";
import { purchasesApi } from "./apis/purchases";
import { bannerApi } from "./apis/banner";
import productsSlice from "./slices/productsSlice";
import authSlice from "./slices/authSlice";
import categoriesSlice from "./slices/categoriesSlice";
import cartSlice from "./slices/cartSlice";
import purchasesSlice from "./slices/purchasesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    categories: categoriesSlice,
    cart: cartSlice,
    purchases: purchasesSlice,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [purchasesApi.reducerPath]: purchasesApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(purchasesApi.middleware)
      .concat(bannerApi.middleware),
});
