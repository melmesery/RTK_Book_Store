import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice.js";
import AuthSlice from "./AuthSlice.js";

const store = configureStore({
  reducer: {
    book: BookSlice,
    auth: AuthSlice,
  },
});

export default store;
