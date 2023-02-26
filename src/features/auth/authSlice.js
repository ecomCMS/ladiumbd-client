import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  accessToken: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {},
    userLogout: (state) => {},
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
