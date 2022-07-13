import React from "react";
import saleOffImg from "../../assets/saleOffImage/1.png";
import Banner from "../../components/Banner";
import PolicyList from "../../components/PolicyList";
import ProductList from "../../components/ProducList";
import data from "./data";
function Home() {
  return (
    <>
      <Banner />

      <PolicyList />

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Top sản phẩm bán chạy trong tuần
      </h2>
      <ProductList data={data} />

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Top sản phẩm mới
      </h2>

      <ProductList data={data} />

      <div style={{ marginBottom: "60px" }}>
        <img src={saleOffImg} />
      </div>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Sản phẩm phổ biến
      </h2>

      <ProductList data={data} />

      <ProductList data={data} />
    </>
  );
}

export default Home;
