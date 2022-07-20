import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProducList";
import { Col, Row } from "antd";
import Filter from "../../components/Filter";
import dataAllProduct from "../../data/dataAllProduct";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import Order from "../../components/Order";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function Product() {
  const data = useSelector((state) => state.store.productList);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [showOrder, setShowOrder] = useState(false);

  const [dataProductShow, setDataProductShow] = useState();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const handleOnClick = (actionName, id_e) => {
    switch (actionName) {
      case "select":
        const dataProductSelect = dataAllProduct.find((e, i) => {
          return e.id === id_e;
        });

        setDataProductShow(dataProductSelect);

        if (!isTabletOrMobile) {
          setShowOrder(!showOrder);
        }

        break;

      case "btnClick":
        setShowOrder(false);
        break;

      case "overlayClick":
        setShowOrder(false);
        break;

      case "innerClick":
        id_e.stopPropagation();
        break;
    }
  };

  return (
    <div className={cx("product-container")}>
      <Row>
        <Col md={6}>
          <Filter />
        </Col>
        <Col md={18}>
          {data && (
            <ProductList data={data} md={12} xl={8} onClick={handleOnClick} />
          )}
        </Col>
        {showOrder && (
          <Order modal onClick={handleOnClick} data={dataProductShow} />
        )}
      </Row>
    </div>
  );
}

export default Product;
