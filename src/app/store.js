import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
