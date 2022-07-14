import React from "react";
import saleOffImg from "../../assets/saleOffImage/1.png";
import Banner from "../../components/Banner";
import PolicyList from "../../components/PolicyList";
import ProductList from "../../components/ProducList";
import data from "./data";
import { Row, Col } from "antd";
import Filter from "../../components/Filter";
function Product() {
  return (
    <div style={{ paddingTop: "200px" }}>
      <Row>
        <Col md={6}>
          <Filter />
        </Col>
        <Col md={18}>
          <ProductList data={data} md={8} />
        </Col>
      </Row>
    </div>
  );
}

export default Product;
