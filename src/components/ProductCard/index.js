import classNames from "classnames/bind";
import React from "react";
import { BiCart } from "react-icons/bi";
import NumberFormat from "react-number-format";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Button from "../GlobalComponents/Button";
import styles from "./ProductCard.module.scss";
const cx = classNames.bind(styles);

function ProductCard({
  title,
  priceNow,
  priceOld,
  imageModel,
  imageClothes,
  className,
  onClick,
  id,
}) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className={cx("poduct-card-container", `${className}`)}>
      <div className={cx("card")}>
        <Link to={`/product/${id}`}>
          <div className={cx("image")}>
            <img className={cx("image-model")} src={imageModel} />
            <img className={cx("image-clothes")} src={imageClothes} />
          </div>
        </Link>

        <span>{title}</span>

        <div className={cx("price")}>
          <span className={cx("price-now")}>
            <NumberFormat
              value={priceNow}
              className="foo"
              displayType={"text"}
              thousandSeparator={true}
              suffix={" đ"}
            />
          </span>
          <span className={cx("price-old")}>
            <NumberFormat
              value={priceOld}
              className="foo"
              displayType={"text"}
              thousandSeparator={true}
              suffix={" đ"}
            />
          </span>
        </div>
        {!isTabletOrMobile && (
          <Button primary className={cx("btn")} onClick={onClick}>
            <span className={cx("btn-text")}>Chọn mua</span>
            <span className={cx("btn-icon")}>
              <BiCart />
            </span>
          </Button>
        )}
        {isTabletOrMobile && (
          <Button
            primary
            className={cx("btn")}
            to={`/product/${id}`}
            onClick={onClick}
          >
            <span className={cx("btn-text")}>Chọn mua</span>
            <span className={cx("btn-icon")}>
              <BiCart />
            </span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
