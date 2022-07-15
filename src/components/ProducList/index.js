import classNames from "classnames/bind";
import React from "react";
import styles from "./ProductList.module.scss";

import { Col, Row } from "antd";
import ProductCard from "../ProductCard";
const cx = classNames.bind(styles);

function ProductList({ data, xs = 24, md = 8, xl = 6, onClick }) {
  const handleOnClick = (actionName, id) => {
    onClick(actionName, id);
  };
  return (
    <div className={cx("policy-list-container")}>
      <Row gutter={[24, 40]}>
        {data &&
          data.map((e, i) => (
            <Col key={`product_${i}`} xs={xs} xl={xl} md={md}>
              <ProductCard
                title={e.title}
                priceNow={e.priceNow}
                priceOld={e.priceOld}
                imageModel={e.imageModel}
                imageClothes={e.imageClothes}
                onClick={() => handleOnClick("select", e.id)}
                id={e.id}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default ProductList;
