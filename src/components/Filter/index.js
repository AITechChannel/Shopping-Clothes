import classNames from "classnames/bind";
import React, { useState } from "react";
import CheckBoxCustom from "../GlobalComponents/CheckBoxCustom";
import styles from "./Filter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import clothesSLice from "../../redux/sliceReducer/clothesSlice";
const cx = classNames.bind(styles);

function Filter({ className }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.store);
  console.log(state);
  const handleOnchange = (e) => {
    dispatch(
      clothesSLice.actions.filter({
        value: e.target.value,
        checked: e.target.checked,
      })
    );
  };

  return (
    <div className={cx("Filter-container", `${className}`)}>
      <div>
        <p>Danh mục sản phẩm</p>
        <div>
          <CheckBoxCustom
            label="Áo thun"
            onChange={(e) => handleOnchange(e)}
            value="t_shirt"
          />
          <CheckBoxCustom
            label="Áo sơ mi"
            onChange={(e) => handleOnchange(e)}
            value="shirt"
          />
          <CheckBoxCustom
            label="Quần Jean"
            onChange={(e) => handleOnchange(e)}
            value="jean"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
