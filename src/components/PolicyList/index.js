import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./PolicyList.module.scss";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiFillCreditCard,
} from "react-icons/ai";
import Button from "../GlobalComponents/Button";
import { BiCart, BiDonateBlood } from "react-icons/bi";
import PolicyCard from "../PolicyCard";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { RiVipCrownLine } from "react-icons/ri";
import { Row, Col } from "antd";
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
    description: "Đổi, sửa đồ tại tất cả store",
  },
];

function PolicyList() {
  return (
    <div className={cx("policies-container")}>
      <Row gutter={[24, 24]}>
        {data.map((e, i) => (
          <Col md={6}>
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
