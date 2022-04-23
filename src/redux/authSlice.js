import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const getUser = createAsyncThunk("authSlide/getUser", async (data) => {
  try {
    const response = await api.login(data);
    return response;
  } catch (error) {
    throw error;
  }
});
const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,

  extraReducers: {
    [getUser.pending]: (state) => {
      return state;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.status = "success";
      localStorage.setItem("token", payload.token);
    },
    [getUser.rejected]: (state) => {
      state.status = "failure";
    },
  },
});

export default authSlice.reducer;
