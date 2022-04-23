import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const getAllBook = createAsyncThunk(
  "boookSlice/getAllBook",
  async () => {
    try {
      const response = await api.getAll();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const getCategory = createAsyncThunk(
  "boookSlice/getCategory",
  async (params) => {
    console.log("🚀 ~ file: BookSlice.js ~ line 19 ~ params", params);
    try {
      const response = await api.getAll();
      console.log("🚀 ~ file: BookSlice.js ~ line 21 ~ response", response);
      const data = response.filter(
        (data) => data.categoryVM.name === params.id
      );
      console.log("🚀 ~ file: BookSlice.js ~ line 23 ~ data", data);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
const initialState = {
  books: [],
  search: [],
  productbycategory: [],
  status: null,
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState,

  reducers: {
    searchBook: (state, { payload }) => {
      state.search = searchItem(state.books, payload.name);
    },
  },
  extraReducers: {
    [getAllBook.pending]: (state) => {
      return state;
    },
    [getAllBook.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.status = "success";
    },
    [getAllBook.rejected]: (state) => {
      state.status = "failure";
    },
    [getCategory.pending]: (state) => {
      return state;
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.productbycategory = payload;
      state.status = "success";
    },
  },
});

export default bookSlice.reducer;
export const { searchBook } = bookSlice.actions;

const searchItem = (data, text) => {
  const res = data.filter(
    (data) => data.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
  );
  return res;
};
