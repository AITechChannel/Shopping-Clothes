import classNames from "classnames/bind";
import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import styles from "./CheckBoxCustom.module.scss";

const cx = classNames.bind(styles);

function CheckBoxCustom({ value, checked, label, onChange }) {
  return (
    <label className={cx("custom-checkbox")}>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>
        <BsFillCheckSquareFill className={cx("icon")} />
      </span>
      {label}
    </label>
  );
}

export default CheckBoxCustom;
