import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import BookSlice from "./BookSlice";
import CartSlice from "./CartSlice";
import DetailSlice from "./DetailSlice";

const store = configureStore({
  reducer: {
    Books: BookSlice,
    Detail: DetailSlice,
    Auth: authSlice,
    Cart: CartSlice,
  },
});

export default store;
