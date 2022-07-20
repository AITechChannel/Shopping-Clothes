import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { GrMenu, GrPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clothesSLice from "../../redux/sliceReducer/clothesSlice";
import Button from "../GlobalComponents/Button";
import styles from "./Header.module.scss";

import { message } from "antd";
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

  const dispatch = useDispatch();

  useEffect(() => {
    const dataJsonCart = localStorage.getItem("cart");
    const dataCart = JSON.parse(dataJsonCart);
    if (dataJsonCart) {
      dispatch(clothesSLice.actions.addCart({ initCart: dataCart }));
    }
  }, []);
  const dataCartRedux = useSelector((state) => state.store.cart);

  useEffect(() => {
    if (dataCartRedux.length > 0) {
      localStorage.setItem("cart", JSON.stringify(dataCartRedux));
    }
  }, [dataCartRedux]);

  const warning = () => {
    message.warning("Xin lỗi! Chức năng này đang được cập nhật");
  };

  return (
    <div className={cx("header-container", shinkHeader ? "shink" : null)}>
      <Button
        text
        className={cx("sub-icon")}
        onClick={(e) => setShowMenu(!showMenu)}
      >
        <GrMenu />
      </Button>

      <div
        className={cx(showMenu ? "active" : null, "overlay")}
        onClick={(e) => setShowMenu(false)}
      >
        <div className={cx("menu-slider")} onClick={(e) => e.stopPropagation()}>
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
        <Button className={cx("action-icon")} text onClick={warning}>
          <AiOutlineSearch />
        </Button>
        <div className={cx("cart", pathname === "/cart" ? "active" : null)}>
          <Button to="/cart" className={cx("action-icon")} text>
            <BiCart />
          </Button>
          <span>{dataCart.length}</span>
        </div>
        <Button className={cx("action-icon")} text onClick={warning}>
          <AiOutlineUser />
        </Button>
      </div>
    </div>
  );
}

export default Header;
