import React, { useState } from "react";
import saleOffImg from "../../assets/saleOffImage/1.png";
import Banner from "../../components/Banner";
import Order from "../../components/Order";
import PolicyList from "../../components/PolicyList";
import ProductList from "../../components/ProducList";
import dataProductBestSeller from "../../data/dataProductBestSeller";

import dataProductNew from "../../data/dataProductNew";
import dataProductPopular from "../../data/dataProductPopular";
import dataAllProduct from "../../data/dataAllProduct";

function Home() {
  const [showOrder, setShowOrder] = useState(false);

  const [dataProductShow, setDataProductShow] = useState();

  const handleOnClick = (actionName, id) => {
    switch (actionName) {
      case "select":
        const dataProductSelect = dataAllProduct.find((e, i) => {
          console.log(e.id);
          return e.id === id;
        });

        setDataProductShow(dataProductSelect);
        setShowOrder(!showOrder);

        break;
    }
  };
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

      <ProductList data={dataProductNew} />

      <div style={{ marginBottom: "60px" }}>
        <img src={saleOffImg} />
      </div>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Sản phẩm phổ biến
      </h2>

      <ProductList data={dataProductPopular} />

      {showOrder && (
        <Order
          modal
          onClose={() => setShowOrder(false)}
          data={dataProductShow}
        />
      )}
    </>
  );
}

export default Home;
