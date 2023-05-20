import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { variant, product, quantity } = action.payload;

      const stateProduct = state.products.find((p) =>
        variant !== undefined
          ? p?.variant?._id === variant._id
          : p.product._id === product._id && p.variant === undefined
      );
      if (stateProduct) {
        stateProduct.quantity += quantity;
        return;
      }
      state.products.push({ product, quantity, variant });
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeProduct: (state, action) => {
      const { variant, product, quantity } = action.payload;
      const stateProduct = state.products.find((p) =>
        variant !== undefined
          ? p?.variant?._id === variant._id
          : p.product._id === product._id && p.variant === undefined
      );
      if (stateProduct) {
        stateProduct.quantity -= quantity;
        if (stateProduct.quantity === 0) {
          state.products = state.products.filter((p) => p.quantity !== 0);
          localStorage.setItem("cart", JSON.stringify(state.products));
        }
      }
    },
    repeatCart: (state, action) => {
      const { product, variant, quantity, price } = action.payload;
      state.products.push({ product, quantity, variant, price });
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.removeItem("cart");
    },
    updateProductQuantity: (state, action) => {
      const { product, variant, quantity } = action.payload;

      const stateProduct = state.products.find((p) =>
        variant !== undefined
          ? p?.variant?._id === variant._id
          : p.product._id === product._id && p.variant === undefined
      );

      if (stateProduct) {
        stateProduct.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  repeatCart,
  clearCart,
  updateProductQuantity
} = cartSlice.actions;

export default cartSlice.reducer;