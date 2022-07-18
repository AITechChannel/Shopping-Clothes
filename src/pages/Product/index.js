import React, { useEffect, useState } from "react";
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
import { useMediaQuery } from "react-responsive";
import styles from "./Product.module.scss";
import Order from "../../components/Order";
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
          <Order
            modal
            onClose={() => setShowOrder(false)}
            data={dataProductShow}
          />
        )}
      </Row>
    </div>
  );
}

export default Product;
