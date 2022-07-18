import { configureStore } from "@reduxjs/toolkit";
import clothesSLice from "../sliceReducer/clothesSlice";

const store = configureStore({
  reducer: {
    store: clothesSLice.reducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;
