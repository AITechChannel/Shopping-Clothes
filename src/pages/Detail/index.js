import React, { useEffect, useState } from "react";
import saleOffImg from "../../assets/saleOffImage/1.png";
import Banner from "../../components/Banner";
import PolicyList from "../../components/PolicyList";
import ProductList from "../../components/ProducList";

import { Row, Col } from "antd";
import Filter from "../../components/Filter";
import dataAllProduct from "../../data/dataAllProduct";

import { useSelector } from "react-redux";
import DesProduct from "../../components/Order/components/DesProduct";
import OrderOption from "../../components/Order/components/OrderOption";
import { Routes, Route, useParams } from "react-router-dom";
import Order from "../../components/Order";
import dataProductMore from "../../data/dataProductMore";
function Detail() {
  const { id } = useParams();
  const [dataProductShow, setDataProductShow] = useState();
  console.log(dataProductShow);

  useEffect(() => {
    if (id) {
      const dataProductSelect = dataAllProduct.find((e, i) => {
        return e.id == id;
      });
      console.log(dataProductSelect);
      setDataProductShow(dataProductSelect);
    }
    console.log(dataProductShow);
  }, [id]);

  console.log(id);
  return (
    <div style={{ paddingTop: "200px" }}>
      {dataProductShow && <Order data={dataProductShow} />}
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Khám phá thêm
      </h2>
      <ProductList data={dataProductMore} />
    </div>
  );
}

export default Detail;
