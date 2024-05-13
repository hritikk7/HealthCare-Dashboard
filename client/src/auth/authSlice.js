import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {},
  token: null,
  error: null,
  success: false,
};


const authSlice = createSlice({
    name : auth,
    initialState,
    reducers: {},
})


export default authSlice.reducer;