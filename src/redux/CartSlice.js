import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const getCart = createAsyncThunk("CartSlice/getCart", async () => {
  try {
    const response = await api.getProductOnCart();
    console.log(response);
    return response.message;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  product: [],
  status: null,
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,

  reducers: {
    deleteProcuct: (state, { payload }) => {
      console.log("🚀 ~ file: CartSlice.js ~ line 25 ~ payload", payload);
      state.product = delitem(state.product, payload);
    },
  },
  extraReducers: {
    [getCart.pending]: (state) => {
      state.status = "pendding";
    },
    [getCart.fulfilled]: (state, { payload }) => {
      state.product = payload;
      state.status = "success";
    },
    [getCart.rejected]: (state) => {
      state.status = "failure";
    },
  },
});

export default CartSlice.reducer;
export const { deleteProcuct } = CartSlice.actions;

const delitem = (data, key) => data.filter((e) => e.bookId !== key);
