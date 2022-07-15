import { Col, Row } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import dataAllProduct from "../../../../data/dataAllProduct";
import clothesSLice from "../../../../redux/sliceReducer/clothesSlice";
import Button from "../../../GlobalComponents/Button";
import styles from "./OrderOption.module.scss";
const cx = classNames.bind(styles);

function OrderOption({ data, className }) {
  const dispatch = useDispatch();
  const handleOnClick = (actionName) => {
    // console.log(actionName);

    dispatch(
      clothesSLice.actions.addCart({ actionName: actionName, data: data })
    );
  };

  return (
    <div className={cx("order-option-container", `${className}`)}>
      <Row gutter={[24, 24]}>
        <Col md={24}>
          <h2>{data.title}</h2>
          <span>{data.priceNow}</span>
          <h2>Màu sắc</h2>
          <div className={cx("color-option")}>
            {data.color.map((e, i) => (
              <div className={cx("color")} onClick={() => handleOnClick(e)}>
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
                className={cx("size")}
                onClick={() => handleOnClick(e)}
              >
                <div className={cx("text")}>{e}</div>
              </div>
            ))}
          </div>

          <h2>Số lượng</h2>
          <div className={cx("number-option")}>
            <Button text className={cx("btn")}>
              <span>
                <AiOutlineLine />
              </span>
            </Button>
            <div className={cx("number")}>
              <span>1</span>
            </div>
            <Button text className={cx("btn")}>
              <AiOutlinePlus />
            </Button>
          </div>

          <div className="btn-container">
            <Button primary onClick={() => handleOnClick("add")}>
              Thêm vào giỏ hàng
            </Button>
            <Button primary>Mua ngay</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OrderOption;
