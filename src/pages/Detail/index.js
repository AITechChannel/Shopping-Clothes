import React from "react";
import saleOffImg from "../../assets/saleOffImage/1.png";
import Banner from "../../components/Banner";
import PolicyList from "../../components/PolicyList";
import ProductList from "../../components/ProducList";

import { Row, Col } from "antd";
import Filter from "../../components/Filter";
import dataAllProduct from "../../data/dataAllProduct";

import { useSelector } from "react-redux";
import DesProduct from "../../components/DesProduct";
import OrderOption from "../../components/OrderOption";
import Order from "../../components/Order";
function Detail() {
  const data = useSelector((state) => state.store.productList);
  console.log(data);
  return (
    <div style={{ paddingTop: "200px" }}>
      <Order />
    </div>
  );
}

export default Detail;
