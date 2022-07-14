import React from "react";
import saleOffImg from "../../assets/saleOffImage/1.png";
import Banner from "../../components/Banner";
import PolicyList from "../../components/PolicyList";
import ProductList from "../../components/ProducList";

import { Row, Col } from "antd";
import Filter from "../../components/Filter";
import dataAllProduct from "../../data/dataAllProduct";

import { useSelector } from "react-redux";
function Product() {
  const data = useSelector((state) => state.store.productList);
  console.log(data);
  return (
    <div style={{ paddingTop: "200px" }}>
      <Row>
        <Col md={6}>
          <Filter />
        </Col>
        <Col md={18}>{data && <ProductList data={data} md={8} />}</Col>
      </Row>
    </div>
  );
}

export default Product;
