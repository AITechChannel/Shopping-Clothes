import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Button from "../GlobalComponents/Button";
const cx = classNames.bind(styles);

const headerNav = [
  { display: "Trang chủ", path: "/" },
  { display: "Sản phẩm", path: "/catalog" },
  {
    display: "Phụ kiện",
    path: "/accessories",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];
function Header() {
  const { pathname } = useLocation();

  const isActiveIndex = headerNav.findIndex((e, i) => {
    return e.path === pathname;
  });

  return (
    <div className={cx("header-container")}>
      <ul className={cx("menu")}>
        {headerNav.map((e, i) => (
          <li
            key={`headerNav_${i}`}
            className={cx(i === isActiveIndex ? "isActive" : null, "menu-item")}
          >
            <Link to={e.path}>{e.display}</Link>
          </li>
        ))}
      </ul>

      <span className={cx("logo")}>Yolo Shop</span>

      <div className={cx("actions")}>
        <Button className={cx("action-icon")} text>
          <AiOutlineSearch />
        </Button>
        <Button className={cx("action-icon")} text>
          <AiOutlineShoppingCart />
        </Button>
        <Button className={cx("action-icon")} text>
          <AiOutlineUser />
        </Button>
      </div>
    </div>
  );
}

export default Header;
