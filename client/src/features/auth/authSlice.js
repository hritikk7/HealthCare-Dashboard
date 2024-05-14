import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authAction";

const initialState = {
  loading: false,
  userInfo: {},
  token: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = true;
      state.success = payload;
    },
  },
});

export default authSlice.reducer;
