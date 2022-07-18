import React, { useEffect } from "react";
import Cart from "../../components/Cart";
import { useSelector } from "react-redux";

import emptyCart from "../../assets/emptyCart/empty-cart.png";
import classNames from "classnames/bind";

import styles from "./CartPage.module.scss";
const cx = classNames.bind(styles);
function CartPage() {
  const dataCart = useSelector((state) => state.store.cart);

  const dataJsonCart = localStorage.getItem("cart");
  const dataCartLocal = JSON.parse(dataJsonCart);
  console.log(dataCartLocal);

  return (
    <div className={cx("cart-page-container")}>
      {dataCart.length > 0 || dataCartLocal.length > 0 ? (
        <Cart />
      ) : (
        <img className={cx("img-empty")} src={emptyCart} />
      )}
    </div>
  );
}

export default CartPage;
