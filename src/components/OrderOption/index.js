import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./OrderOption.module.scss";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlinePlus,
  AiOutlineLine,
} from "react-icons/ai";
import Button from "../GlobalComponents/Button";
import img1 from "../../assets/productImage/1_1.jpg";
import img2 from "../../assets/productImage/1_2.jpg";
import { Row, Col } from "antd";
import dataAllProduct from "../../data/dataAllProduct";
const cx = classNames.bind(styles);

function OrderOption({ className }) {
  const dataProduct = dataAllProduct[0];

  return (
    <div className={cx("order-option-container", `${className}`)}>
      <Row gutter={[24, 24]}>
        <Col md={24}>
          <h2>{dataProduct.title}</h2>
          <span>{dataProduct.priceNow}</span>
          <h2>Màu sắc</h2>
          <div className={cx("color-option")}>
            {dataProduct.color.map((e, i) => (
              <div className={cx("color")}>
                <div
                  className={cx("circle")}
                  style={{ backgroundColor: `${e}` }}
                ></div>
              </div>
            ))}
          </div>

          <h2>Kích cỡ</h2>
          <div className={cx("size-option")}>
            {dataProduct.size.map((e, i) => (
              <div key={`size_${i}`} className={cx("size")}>
                <div className={cx("text")}>{e}</div>
              </div>
            ))}
          </div>

          <h2>Số lượng</h2>
          <div className={cx("number-option")}>
            <Button text>
              <AiOutlinePlus />
            </Button>
            <div className={cx("number")}>
              <span>123</span>
            </div>
            <Button text>
              <AiOutlineLine />
            </Button>
          </div>

          <div className="btn-container">
            <Button primary>Thêm vào giỏ hàng</Button>
            <Button primary>Mua ngay</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OrderOption;
