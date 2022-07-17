import { createSlice, current } from "@reduxjs/toolkit";
import dataAllProduct from "../../data/dataAllProduct";
import { useDispatch, useSelector } from "react-redux";
import dataAllType from "../../data/dataAllType";
import dataAllColor from "../../data/dataAllColor";
const clothesSLice = createSlice({
  name: "clothes",
  initialState: {
    productList: dataAllProduct,
    filter: { type: [], color: [], size: [] },
    cartSelecting: { data: "", color: "", size: "", number: "" },
    cart: [],
  },
  reducers: {
    filter: (state, action) => {
      if (dataAllType.includes(action.payload.value)) {
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
      }
      // if (dataAllColor.includes(action.payload.value)) {
      //   if (action.payload.checked) {
      //     state.filter.color.push(action.payload.value);
      //   } else {
      //     state.filter.color.splice(
      //       state.filter.color.findIndex((e, i) => e.color === action.payload),
      //       1
      //     );
      //   }
      //   const arFilter = state.filter.color;
      //   console.log("ar", current(arFilter));
      //   for (let value of arFilter) {
      //     const currentProduct = dataAllProduct.filter((e, i) => {
      //       if (state.filter.color.length === 0) {
      //         return true;
      //       }
      //       console.log(value);
      //       return e.color.includes(value);
      //     });
      //     state.productList = currentProduct;
      //   }
      // }
    },
    addCart: (state, action) => {
      if (dataAllColor.includes(action.payload.actionName)) {
        state.cartSelecting.color = action.payload.actionName;
      }
      if (["s", "m", "xl", "xxl"].includes(action.payload.actionName)) {
        state.cartSelecting.size = action.payload.actionName;
      }

      if (action.payload.actionName === "add") {
        console.log(current(state.cartSelecting));

        state.cartSelecting.data = action.payload.data;
        state.cartSelecting.number = action.payload.number;

        state.cart.push(state.cartSelecting);
      }

      if (action.payload.initCart) {
        state.cart = action.payload.initCart;
      }
    },
    delCart: (state, action) => {
      state.cart.splice(
        state.cart.findIndex((e, i) => e.data.id == action.payload),
        1
      );
    },
    updateCart: (state, action) => {
      if (action.payload.actionName === "increase") {
        const current1 = state.cart.find(
          (e, i) => e.data.id == action.payload.value
        );

        // current1.number = action.payload.value;
        // console.log(current(current1));
      }
    },
  },
});

export default clothesSLice;
