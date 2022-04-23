import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const getBookById = createAsyncThunk(
  "DetailSlice/getBookById",
  async (params) => {
    try {
      const response = await api.getById(params);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
const initialState = {
  books: [],
};

const detailSlide = createSlice({
  name: "detailSlide",
  initialState,

  extraReducers: {
    [getBookById.pending]: (state) => {
      return state;
    },
    [getBookById.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.status = "success";
    },
    [getBookById.rejected]: (state) => {
      state.status = "failure";
    },
  },
});

export default detailSlide.reducer;
export const { searchBook } = detailSlide.actions;
