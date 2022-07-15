import React from "react";
import saleOffImg from "../../assets/saleOffImage/1.png";
import Banner from "../Banner";
import PolicyList from "../PolicyList";
import ProductList from "../ProducList";

import { Row, Col } from "antd";
import Filter from "../Filter";
import dataAllProduct from "../../data/dataAllProduct";

import { useSelector } from "react-redux";
import DesProduct from "../DesProduct";
import OrderOption from "../OrderOption";
import classNames from "classnames/bind";
import styles from "./Order.module.scss";

const cx = classNames.bind(styles);
function Order() {
  const data = useSelector((state) => state.store.productList);
  console.log(data);
  return (
    <div className={cx("order-container")}>
      <div className={cx("order-modal")}>
        <div className={cx("modal")}>
          <div className={cx("order-inner")}>
            <Row gutter={[24, 24]}>
              <Col md={14}>
                <DesProduct />
              </Col>
              <Col md={10}>
                <OrderOption />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={cx("order")}>
        <Row gutter={[24, 24]}>
          <Col md={14}>
            <DesProduct />
          </Col>
          <Col md={10}>
            <OrderOption />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Order;
