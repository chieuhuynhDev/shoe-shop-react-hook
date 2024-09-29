import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    number: 1,
  },
});
