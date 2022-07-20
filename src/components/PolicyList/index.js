import { Col, Row } from "antd";
import classNames from "classnames/bind";
import React from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { BiCart, BiDonateBlood } from "react-icons/bi";
import { RiVipCrownLine } from "react-icons/ri";
import PolicyCard from "../PolicyCard";
import styles from "./PolicyList.module.scss";
const cx = classNames.bind(styles);

const data = [
  {
    icon: <BiCart />,
    title: "Miễn phí giao hàng",
    description: "Miễn phí giao hàng với đơn > 239k",
  },
  {
    icon: <AiFillCreditCard />,
    title: "Thanh toán COD",
    description: "Thanh toán khi nhận hàng (COD)",
  },
  {
    icon: <RiVipCrownLine />,
    title: "Khách hàng VIP",
    description: "Ưu đãi giành cho khách hàng VIP",
  },
  {
    icon: <BiDonateBlood />,
    title: "Hỗ trợ bảo hành",
    description: "Đổi, chỉnh sửa đồ tại tất cả store",
  },
];

function PolicyList() {
  return (
    <div className={cx("policies-container")}>
      <Row gutter={[24, 24]}>
        {data.map((e, i) => (
          <Col xl={6} md={12} xs={24} key={`policy_${i}`}>
            <PolicyCard
              className={cx("policy-item")}
              icon={e.icon}
              title={e.title}
              description={e.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PolicyList;
