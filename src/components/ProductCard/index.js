import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import Button from "../GlobalComponents/Button";
import product1 from "../../assets/productImage/1_1.jpg";
import product2 from "../../assets/productImage/1_2.jpg";
const cx = classNames.bind(styles);

function ProductCard({
  title,
  priceNow,
  priceOld,
  imageModel,
  imageClothes,
  className,
}) {
  return (
    <div className={cx("poduct-card-container", `${className}`)}>
      <div className={cx("card")}>
        <div className={cx("image")}>
          <img className={cx("image-model")} src={imageModel} />
          <img className={cx("image-clothes")} src={imageClothes} />
        </div>

        <span>{title}</span>

        <div className={cx("price")}>
          <span className={cx("price-now")}>{priceNow}</span>
          <span className={cx("price-old")}>{priceOld}</span>
        </div>
        <Button primary className={cx("btn")}>
          <span className={cx("btn-text")}>Chọn mua</span>
          <span className={cx("btn-icon")}>
            <BiCart />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
