import { createSlice } from "@reduxjs/toolkit";
import { dataShoe } from "../../ShoeShop/dataShoe";

const initialState = {
  cart: [],
  dataProduct: dataShoe,
};

const shoeShopReducer = createSlice({
  name: "shopReducer",
  initialState,
  reducers: {},
});

export const {} = shoeShopReducer.actions;

export default shoeShopReducer.reducer;
