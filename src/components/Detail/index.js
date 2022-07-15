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
function Detail() {
  const data = useSelector((state) => state.store.productList);
  console.log(data);
  return (
    <div style={{ paddingTop: "200px" }}>
      <Row gutter={[24, 24]}>
        <Col md={14}>
          <DesProduct />
        </Col>
        <Col md={10}>
          <OrderOption />
        </Col>
      </Row>
    </div>
  );
}

export default Detail;
