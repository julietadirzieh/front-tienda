import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../apis/products";

const initialState = {
  data: [],
  page: 1,
  loading: false,
  selectedProducts: [],
  selectedProductById: null,
  selectedVariant: [],
  productVariants: [],
  searchedProducts: [],
  searchedProductsNavbar: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.allProducts.matchPending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.allProducts.matchFulfilled,
      (state, action) => {
        const { ...data } = action.payload;
        state.loading = false;
        state.data = data;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.allProducts.matchRejected,
      (state) => {
        state.loading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.allVariants.matchFulfilled,
      (state, action) => {
        const data = action.payload;
        state.productVariants = data;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.productsByCategory.matchPending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.productsByCategory.matchFulfilled,
      (state, action) => {
        const { ...results } = action.payload;
        // para seleccionar más de 1 categoría
        // state.selectedProducts = [...state.selectedProducts, ...results];
        state.loading = false;
        state.selectedProducts = results;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.productsByCategory.matchRejected,
      (state) => {
        state.loading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.productById.matchPending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.productById.matchFulfilled,
      (state, action) => {
        state.loading = false;
        const data = action.payload;
        state.selectedProductById = data;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.productById.matchRejected,
      (state) => {
        state.loading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.productsSearch.matchFulfilled,
      (state, action) => {
        const data = action.payload;
        state.searchedProducts = data;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.productsSearchNavbar.matchFulfilled,
      (state, action) => {
        const data = action.payload;
        state.searchedProductsNavbar = data;
      }
    );
  },
  reducers: {
    // Acciones
    removeCategory: (state, action) => {
      const category = action.payload;
      state.selectedProducts = state.selectedProducts.filter(
        (p) => p.category !== category._id
      );
    },
    clearCategories: (state) => {
      state.selectedProducts = [];
      state.page = 1;
    },
    clearSearch: (state) => {
      state.searchedProducts = [];
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page = state.page - 1;
      }
    },
    nextPage: (state) => {
      state.page = state.page + 1;
    },
    setSelectedVariant: (state, action) => {
      const data = action.payload;
      const selectedVariant = state.productVariants.filter(
        (p) => p._id === data.option
      );
      state.selectedVariant = selectedVariant;
    },
    setVariants: (state, action) => {
      const data = action.payload;
      state.productVariants = data;
    },
  },
});

export const {
  removeCategory,
  clearCategories,
  clearSearch,
  prevPage,
  nextPage,
  setSelectedVariant,
  setVariants,
} = productsSlice.actions;

export default productsSlice.reducer;
