import { createSlice, current } from "@reduxjs/toolkit";
import dataAllProduct from "../../data/dataAllProduct";
import { useDispatch, useSelector } from "react-redux";

const clothesSLice = createSlice({
  name: "clothes",
  initialState: {
    productList: dataAllProduct,
    filter: { type: [], color: [], size: [] },
  },
  reducers: {
    filter: (state, action) => {
      // console.log(action.payload.state.checkboxStatus.name);

      // const currentCheck = state.checkboxStatus.find(
      //   (e, i) => e.name === action.payload.value
      // );
      // currentCheck.checked = action.payload.checked;
      // console.log(action.payload);
      // const currentFilter = dataAllProduct.filter((e, i) =>
      //   ["shirt", "jean"].includes(e.type)
      // );

      // state.productList = currentFilter;
      // if (action.payload.checked) {
      //   const currentFilter = dataAllProduct.filter(
      //     (e, i) => e.type === "shirt"
      //   );

      //   state.productList = currentFilter;
      // } else {
      //   state.productList = dataAllProduct;
      // }
      // console.log(current(state));

      if (action.payload.checked) {
        state.filter.type.push(action.payload.value);
      } else {
        state.filter.type.splice(
          state.filter.type.findIndex((e, i) => e.type === action.payload),
          1
        );
      }

      const currentProduct = dataAllProduct.filter((e, i) => {
        if (state.filter.type.length === 0) {
          return true;
        }
        return state.filter.type.includes(e.type);
      });

      state.productList = currentProduct;

      // console.log(current(state.filter.type));

      // console.log(action.payload.state);
    },
  },
});

export default clothesSLice;
