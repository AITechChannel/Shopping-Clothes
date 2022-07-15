import React from "react";
import { Col, Row } from "antd";
import classNames from "classnames/bind";
import Button from "../GlobalComponents/Button";
import DesProduct from "./components/DesProduct";
import OrderOption from "./components/OrderOption";
import styles from "./Order.module.scss";

const cx = classNames.bind(styles);
function Order({ modal = false, onClose, data }) {
  return (
    <div className={cx("order-container")}>
      {modal && (
        <div className={cx("order-modal")}>
          <div className={cx("modal")}>
            <div className={cx("order-inner")}>
              <Row gutter={[24, 24]}>
                <Col md={14}>
                  <DesProduct data={data} />
                </Col>
                <Col md={10}>
                  <OrderOption data={data} />
                </Col>
              </Row>
              <Button className={cx("close")} primary onClick={onClose}>
                Đóng
              </Button>
            </div>
          </div>
        </div>
      )}

      {!modal && (
        <div className={cx("order")}>
          <Row gutter={[24, 24]}>
            <Col md={14}>
              <DesProduct data={data} />
            </Col>
            <Col md={10}>
              <OrderOption data={data} />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default Order;
