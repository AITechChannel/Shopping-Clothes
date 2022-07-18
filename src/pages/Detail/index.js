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
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import Order from "../../components/Order";
import dataProductMore from "../../data/dataProductMore";
import classNames from "classnames/bind";
import { useMediaQuery } from "react-responsive";
import styles from "./Detail.module.scss";
const cx = classNames.bind(styles);
function Detail() {
  const { id } = useParams();
  const [dataProductShow, setDataProductShow] = useState();
  const [showOrder, setShowOrder] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const handleOnClick = (actionName, id) => {
    switch (actionName) {
      case "select":
        const dataProductSelect = dataAllProduct.find((e, i) => {
          return e.id === id;
        });

        setDataProductShow(dataProductSelect);

        if (!isTabletOrMobile) {
          setShowOrder(!showOrder);
        }

        break;
    }
  };

  return (
    <div className={cx("detail-container")}>
      {dataProductShow && <Order data={dataProductShow} />}
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Khám phá thêm
      </h2>
      <ProductList data={dataProductMore} onClick={handleOnClick} />
      {showOrder && (
        <Order
          modal
          onClose={() => setShowOrder(false)}
          data={dataProductShow}
        />
      )}
    </div>
  );
}

export default Detail;
