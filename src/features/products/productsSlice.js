import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
