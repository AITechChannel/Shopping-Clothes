import { Col, Row } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import img1 from "../../../../assets/productImage/1_1.jpg";
import img2 from "../../../../assets/productImage/1_2.jpg";
import Button from "../../../GlobalComponents/Button";
import styles from "./DesProduct.module.scss";

const cx = classNames.bind(styles);

function DesProduct({ data, className }) {
  const dataImg = [data.imageModel, data.imageClothes];

  const [more, setMore] = useState(false);

  const [showImgIndex, setShowImgIndex] = useState(0);

  const handleOnClick = () => {
    setMore(!more);
  };

  return (
    <div className={cx("des-product-container", `${className}`)}>
      <Row gutter={[24, 24]}>
        <Col md={6}>
          <div>
            {dataImg.map((e, i) => (
              <img
                key={`dataImg_${i}`}
                src={e}
                onClick={() => setShowImgIndex(i)}
              />
            ))}
          </div>
        </Col>
        <Col md={18}>
          <img src={dataImg[showImgIndex]}></img>
        </Col>
      </Row>
      <Row>
        <h2>Chi tiết sản phẩm</h2>
        <div className={cx(more ? "more" : null, "description")}>
          <p>{data.des}</p>
        </div>

        <Button primary onClick={handleOnClick}>
          Xem thêm
        </Button>
      </Row>
    </div>
  );
}

export default DesProduct;
