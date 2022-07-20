import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProducList";
import dataAllProduct from "../../data/dataAllProduct";
import classNames from "classnames/bind";
import { useMediaQuery } from "react-responsive";
import { useLocation, useParams } from "react-router-dom";
import Order from "../../components/Order";
import dataProductMore from "../../data/dataProductMore";
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

      setDataProductShow(dataProductSelect);
    }
  }, [id]);

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
    <div className={cx("detail-container")}>
      {dataProductShow && <Order data={dataProductShow} />}
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Khám phá thêm
      </h2>
      <ProductList data={dataProductMore} onClick={handleOnClick} />
      {showOrder && (
        <Order modal onClick={handleOnClick} data={dataProductShow} />
      )}
    </div>
  );
}

export default Detail;
