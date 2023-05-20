import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth";

const initialState = {
  user: null,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.getUserDetails.matchPending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getUserDetails.matchRejected,
      (state) => {
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, action) => {
        const { token, ...user } = action.payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        localStorage.setItem("token", token);
      }
    );
    builder.addMatcher(
      authApi.endpoints.loginWithCredentials.matchFulfilled,
      (state, action) => {
        const { token, ...user } = action.payload;
        state.user = user;
        state.token = token;
        localStorage.setItem("token", token);
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.modifyUser.matchFulfilled,
      (state, action) => {
        const { token, ...user } = action.payload;
        state.user = user;
        state.token = token;
        localStorage.setItem("token", token);
        state.isLoading = false;
      }
    );
    builder.addMatcher(authApi.endpoints.deleteUser.matchFulfilled, (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
    });
    builder.addMatcher(
      authApi.endpoints.getUserDetails.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      }
    );
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      state.user = null;
      state.token = null;
    },
    setCredentials: (state, action) => {
      const { ...user } = action.payload;
      state.user = user;
    },
  },
});

export const { logout, setCredentials, getUserDetails } = authSlice.actions;

export default authSlice.reducer;
