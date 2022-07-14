import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
  AiFillCheckSquare,
} from "react-icons/ai";
import { BsFillCheckSquareFill } from "react-icons/bs";
import Button from "../GlobalComponents/Button";
import { Checkbox } from "antd";
import CheckBoxCustom from "../GlobalComponents/CheckBoxCustom";

const cx = classNames.bind(styles);

function Filter({ className }) {
  return (
    <div className={cx("Filter-container", `${className}`)}>
      <div>
        <p>Danh mục sản phẩm</p>
        <div>
          <span>
            {/* <label className={cx("custom-checkbox")}>
              <input type="checkbox" value="shirt" />
              <span>
                <BsFillCheckSquareFill className={cx("icon")} />
              </span>
              Ao thun
            </label> */}
          </span>

          <CheckBoxCustom label="Áo thun" />
          <CheckBoxCustom label="Áo thun" />
          <CheckBoxCustom label="Quần Jean" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
