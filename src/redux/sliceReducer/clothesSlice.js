import { createSlice, current } from "@reduxjs/toolkit";
import dataAllProduct from "../../data/dataAllProduct";
const clothesSLice = createSlice({
  name: "clothes",
  initialState: {
    productList: dataAllProduct,
    checkboxStatus: [
      { name: "t_shirt", checked: false },
      { name: "shirt", checked: false },
    ],
  },
  reducers: {
    filter: (state, action) => {
      const currentCheck = state.checkboxStatus.find(
        (e, i) => e.name === action.payload.value
      );

      currentCheck.checked = action.payload.checked;

      console.log(action.payload);

      if (action.payload.checked) {
        const currentState = state.productList.filter((e, i) =>
          e.type.includes(action.payload.value)
        );

        state.productList = currentState;
      } else {
        state.productList = dataAllProduct;
      }
    },
  },
});

export default clothesSLice;
