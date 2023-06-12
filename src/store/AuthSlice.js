import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, name: "Mohamed" },
  reducers: {
    replace: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { replace } = authSlice.actions;

export default authSlice.reducer;
