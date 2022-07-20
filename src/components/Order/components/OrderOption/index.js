import { Col, Row } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import clothesSLice from "../../../../redux/sliceReducer/clothesSlice";
import Button from "../../../GlobalComponents/Button";
import styles from "./OrderOption.module.scss";

import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function OrderOption({ data, className }) {
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const handleOnClick = (actionName) => {
    switch (actionName) {
      case "increase":
        setNumber(number + 1);
        break;
      case "decrease":
        setNumber(number - 1);
        break;
    }

    dispatch(
      clothesSLice.actions.addCart({
        actionName: actionName,
        data: data,
        number: number,
        id: data.id,
      })
    );
  };

  const dataCartSlecting = useSelector((state) => state.store.cartSelecting);

  return (
    <div className={cx("order-option-container", `${className}`)}>
      <Row gutter={[24, 24]}>
        <Col md={24} xs={24}>
          <h2>{data.title}</h2>
          <span>{data.priceNow}</span>
          <h2>Màu sắc</h2>
          <div className={cx("color-option")}>
            {data.color.map((e, i) => (
              <div
                key={`color-option_${i}`}
                className={cx(
                  dataCartSlecting.color === e ? "active" : null,
                  "color"
                )}
                onClick={() => handleOnClick(e)}
              >
                <div
                  className={cx("circle")}
                  style={{ backgroundColor: `${e}` }}
                ></div>
              </div>
            ))}
          </div>

          <h2>Kích cỡ</h2>
          <div className={cx("size-option")}>
            {data.size.map((e, i) => (
              <div
                key={`size_${i}`}
                className={cx(
                  dataCartSlecting.size === e ? "active" : null,
                  "size"
                )}
                onClick={() => handleOnClick(e)}
              >
                <div className={cx("text")}>{e}</div>
              </div>
            ))}
          </div>

          <h2>Số lượng</h2>
          <div className={cx("number-option")}>
            <Button
              text
              className={cx("btn")}
              onClick={() => handleOnClick("decrease")}
            >
              <span>
                <AiOutlineLine />
              </span>
            </Button>
            <div className={cx("number")}>
              <span>{number}</span>
            </div>
            <Button
              text
              className={cx("btn")}
              onClick={() => handleOnClick("increase")}
            >
              <AiOutlinePlus />
            </Button>
          </div>

          <div className="btn-order">
            <Button
              primary
              onClick={() => handleOnClick("add", data.id)}
              className={cx("btn-add")}
            >
              Thêm vào giỏ hàng
            </Button>
            <Button primary className={cx("btn-buy")}>
              Mua ngay
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OrderOption;
