import { Col, Row } from "antd";
import classNames from "classnames/bind";
import React from "react";
import Button from "../GlobalComponents/Button";
import DesProduct from "./components/DesProduct";
import OrderOption from "./components/OrderOption";
import styles from "./Order.module.scss";

const cx = classNames.bind(styles);
function Order({ modal = false, onClick, data }) {
  const handleOnClick = (actionName, e) => {
    onClick(actionName, e);
  };
  return (
    <div className={cx("order-container")}>
      {modal && (
        <div
          className={cx("order-modal")}
          onClick={(e) => handleOnClick("overlayClick")}
        >
          <div className={cx("modal")}>
            <div
              className={cx("order-inner")}
              onClick={(e) => handleOnClick("innerClick", e)}
            >
              <Row gutter={[24, 24]}>
                <Col md={14} xs={24}>
                  <DesProduct data={data} />
                </Col>
                <Col md={10} xs={24}>
                  <OrderOption data={data} />
                </Col>
              </Row>
              <Button
                className={cx("close")}
                primary
                onClick={() => handleOnClick("btnClick")}
              >
                Đóng
              </Button>
            </div>
          </div>
        </div>
      )}

      {!modal && (
        <div className={cx("order")}>
          <Row gutter={[24, 24]}>
            <Col md={14} xs={24}>
              <DesProduct data={data} />
            </Col>
            <Col md={10} xs={24}>
              <OrderOption data={data} />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default Order;
