import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./PolicyCard.module.scss";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Button from "../GlobalComponents/Button";

const cx = classNames.bind(styles);

function PolicyCard({ icon, title, description, className }) {
  return (
    <div className={cx("policy-card-container", `${className}`)}>
      <div className={cx("card")}>
        <div className={cx("icon")}>{icon}</div>
        <div className={cx("content")}>
          <h3 className={cx("title")}>{title}</h3>
          <span className={cx("description")}>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default PolicyCard;
