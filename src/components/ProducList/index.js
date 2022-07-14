import classNames from "classnames/bind";
import React from "react";
import styles from "./ProductList.module.scss";

import { Col, Row } from "antd";
import ProductCard from "../ProductCard";
const cx = classNames.bind(styles);

function ProductList({ data, md = 6 }) {
  return (
    <div className={cx("policy-list-container")}>
      <Row gutter={[24, 24]}>
        {data &&
          data.map((e, i) => (
            <Col key={`product_${i}`} md={md}>
              <ProductCard
                title={e.title}
                priceNow={e.priceNow}
                priceOld={e.priceOld}
                imageModel={e.imageModel}
                imageClothes={e.imageClothes}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default ProductList;
