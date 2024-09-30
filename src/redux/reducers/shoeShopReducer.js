import { createSlice } from "@reduxjs/toolkit";
import { dataShoe } from "../../ShoeShop/dataShoe";

const initialState = {
  cart: [],
  dataShoe: dataShoe,
};

const shoeShopReducer = createSlice({
  name: "shoeShopReducer",
  initialState,
  reducers: {},
});

export const {} = shoeShopReducer.actions;

export default shoeShopReducer.reducer;
