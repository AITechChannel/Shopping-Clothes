import React, { useEffect, useState } from "react";
import saleOffImg from "../../assets/saleOffImage/1.png";
import Banner from "../../components/Banner";
import Order from "../../components/Order";
import PolicyList from "../../components/PolicyList";
import ProductList from "../../components/ProducList";
import dataProductBestSeller from "../../data/dataProductBestSeller";

import { useLocation } from "react-router-dom";
import dataAllProduct from "../../data/dataAllProduct";
import dataProductNew from "../../data/dataProductNew";
import dataProductPopular from "../../data/dataProductPopular";

import { useMediaQuery } from "react-responsive";

function Home() {
  const [showOrder, setShowOrder] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [dataProductShow, setDataProductShow] = useState();

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

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Banner />

      <PolicyList />

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Top sản phẩm bán chạy trong tuần
      </h2>
      <ProductList data={dataProductBestSeller} onClick={handleOnClick} />

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Top sản phẩm mới
      </h2>

      <ProductList data={dataProductNew} onClick={handleOnClick} />

      <div style={{ marginBottom: "60px" }}>
        <img src={saleOffImg} />
      </div>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Sản phẩm phổ biến
      </h2>

      <ProductList data={dataProductPopular} onClick={handleOnClick} />

      {showOrder && (
        <Order modal onClick={handleOnClick} data={dataProductShow} />
      )}
    </>
  );
}

export default Home;
