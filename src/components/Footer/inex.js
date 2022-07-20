import { Col, Row } from "antd";
import classNames from "classnames/bind";
import React from "react";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

function Footer({ className }) {
  return (
    <div className={cx("footer-container", `${className}`)}>
      <Row gutter={[24, 24]}>
        <Col md={6} xs={12}>
          <h5>Tổng đài hỗ trợ</h5>
          <ul>
            <li>
              Liên hệ đặt hàng <b>0968529241</b>
            </li>
            <li>
              Liên hệ đặt hàng <b>0968529241</b>
            </li>
            <li>
              Liên hệ đặt hàng <b>0968529241</b>
            </li>
          </ul>
        </Col>
        <Col md={6} xs={12}>
          <h5>Về Yolo Shop</h5>
          <ul>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Giới thiệu</li>
            <li>Tuyển dụng</li>
            <li>Tin tức</li>
            <li>Hệ thống cửa hàng</li>
          </ul>
        </Col>

        <Col md={6} xs={12}>
          <h5>Chăm sóc khách hàng</h5>
          <ul>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách hoàn tiền</li>
          </ul>
        </Col>
        <Col md={6} xs={12}>
          <h5>Yolo Shop</h5>
          <p>
            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng
            triệu người tiêu dùng Việt. Hãy cùng ReactShop hướng đến một cuộc
            sống năng động, tích cực hơn.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
