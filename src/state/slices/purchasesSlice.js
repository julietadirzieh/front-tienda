import { createSlice } from "@reduxjs/toolkit";
import { purchasesApi } from "../apis/purchases";

const initialState = {
  purchase: null,
  purchaseOrderHistory: null,
  isLoading: false,
  repeatPurchase: [],
};

export const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      purchasesApi.endpoints.newPurchase.matchFulfilled,
      (state, action) => {
        const { ...purchase } = action.payload;
        state.purchase = purchase;
      }
    );
    builder.addMatcher(
      purchasesApi.endpoints.getPurchasesHistory.matchPending,
      (state) => {
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      purchasesApi.endpoints.getPurchasesHistory.matchRejected,
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      purchasesApi.endpoints.getPurchasesHistory.matchFulfilled,
      (state, action) => {
        state.purchaseOrderHistory = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      purchasesApi.endpoints.repeatPurchase.matchFulfilled,
      (state, action) => {
        const { repeatPurchase, ...purchaseId } = action.payload;
        state.purchaseId = purchaseId;
        state.repeatPurchase = repeatPurchase;
      }
    );
    builder.addMatcher(
      purchasesApi.endpoints.checkVoucher.matchFulfilled,
      (state, action) => {
        const { discount, code } = action.payload;
        state.discount = discount;
        state.code = code;
      }
    );
    builder.addMatcher(
      purchasesApi.endpoints.checkVoucher.matchRejected,
      (state, action) => {
        state.discount = null;
        state.code = null;
      }
    );
  },
  reducers: {
    changePurchaseStatus: (state, action) => {
      const order = state.purchaseOrderHistory.results.find(
        (order) => order._id === action.payload._id
      );
      order.status = "canceled";
    },
  },
});

export const { prevPage, nextPage, changePurchaseStatus } =
  purchasesSlice.actions;

export default purchasesSlice.reducer;
