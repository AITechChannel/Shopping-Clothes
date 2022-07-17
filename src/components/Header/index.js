import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { GrMenu, GrClose, GrPrevious } from "react-icons/gr";
import { BiCart } from "react-icons/bi";
import Button from "../GlobalComponents/Button";
const cx = classNames.bind(styles);

const headerNav = [
  { display: "Trang chủ", path: "/" },
  { display: "Sản phẩm", path: "/product" },
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
  const dataCart = useSelector((state) => state.store.cart);

  const isActiveIndex = headerNav.findIndex((e, i) => {
    return e.path === pathname;
  });

  const [shinkHeader, setShinkHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleSrollY = () => {
      if (window.scrollY > 0) {
        setShinkHeader(true);
        return;
      }
      setShinkHeader(false);
    };
    window.addEventListener("scroll", handleSrollY);
  });

  return (
    <div className={cx("header-container", shinkHeader ? "shink" : null)}>
      <Button
        text
        className={cx("sub-icon")}
        onClick={() => setShowMenu(!showMenu)}
      >
        <GrMenu />
      </Button>

      <div className={cx(showMenu ? "active" : null, "overlay")}>
        <div className={cx("menu-slider")}>
          <Button
            text
            className={cx("back-icon")}
            onClick={() => setShowMenu(!showMenu)}
          >
            <GrPrevious />
          </Button>
          <ul className={cx("menu-tablet")}>
            {headerNav.map((e, i) => (
              <li
                key={`headerNav_${i}`}
                className={cx(
                  i === isActiveIndex ? "active" : null,
                  "menu-item"
                )}
                onClick={() => setShowMenu(false)}
              >
                <Link to={e.path}>{e.display}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className={cx("menu-pc")}>
        {headerNav.map((e, i) => (
          <li
            key={`headerNav_${i}`}
            className={cx(i === isActiveIndex ? "active" : null, "menu-item")}
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
        <div className={cx("cart")}>
          <Button to="/cart" className={cx("action-icon")} text>
            <BiCart />
          </Button>
          <span>{dataCart.length}</span>
        </div>
        <Button className={cx("action-icon")} text>
          <AiOutlineUser />
        </Button>
      </div>
    </div>
  );
}

export default Header;
