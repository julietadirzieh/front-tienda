import { createSlice } from "@reduxjs/toolkit";
import { categoriesApi } from "../apis/categories";

const initialState = {
  categories: [],
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      categoriesApi.endpoints.allCategories.matchFulfilled,
      (state, action) => {
        const { ...categories } = action.payload;
        state.categories = categories;
      }
    );
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory: (state) => {
      state.selectedCategory = null;
    }
  },
});

export const { setSelectedCategory, clearSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;