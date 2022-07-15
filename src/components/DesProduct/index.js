import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./DesProduct.module.scss";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Button from "../GlobalComponents/Button";
import img1 from "../../assets/productImage/1_1.jpg";
import img2 from "../../assets/productImage/1_2.jpg";
import { Row, Col } from "antd";

const cx = classNames.bind(styles);

function DesProduct({ className }) {
  const dataImg = [img1, img2];
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
          <p>
            Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của
            bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà
            lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic
            chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!
          </p>

          <p>
            Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của
            bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà
            lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic
            chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!
          </p>

          <p>
            Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của
            bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà
            lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic
            chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!
          </p>
        </div>

        <Button primary onClick={handleOnClick}>
          Xem thêm
        </Button>
      </Row>
    </div>
  );
}

export default DesProduct;
