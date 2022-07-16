import React, { useEffect } from "react";
import saleOffImg from "../../assets/saleOffImage/1.png";
import Banner from "../../components/Banner";
import PolicyList from "../../components/PolicyList";
import ProductList from "../../components/ProducList";

import { Row, Col } from "antd";
import Filter from "../../components/Filter";
import dataAllProduct from "../../data/dataAllProduct";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Product.module.scss";
const cx = classNames.bind(styles);
function Product() {
  const data = useSelector((state) => state.store.productList);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={cx("product-container")}>
      <Row>
        <Col md={6}>
          <Filter />
        </Col>
        <Col md={18}>{data && <ProductList data={data} md={12} xl={8} />}</Col>
      </Row>
    </div>
  );
}

export default Product;
