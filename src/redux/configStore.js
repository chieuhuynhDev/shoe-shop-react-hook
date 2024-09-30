import { configureStore } from "@reduxjs/toolkit";
import shoeShopReducer from "./reducers/shoeShopReducer";

export const store = configureStore({
  reducer: {
    shoeShopReducer: shoeShopReducer,
  },
});
