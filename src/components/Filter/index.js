import classNames from "classnames/bind";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clothesSLice from "../../redux/sliceReducer/clothesSlice";
import CheckBoxCustom from "../GlobalComponents/CheckBoxCustom";
import styles from "./Filter.module.scss";
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
    <div className={cx("filter-container", `${className}`)}>
      <div>
        <p>
          <b>Danh mục sản phẩm</b>
        </p>
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
      {/* <div>
        <p>Danh mục sản phẩm</p>
        <div>
          <CheckBoxCustom
            label="Trắng"
            onChange={(e) => handleOnchange(e)}
            value="white"
          />
          <CheckBoxCustom
            label="Đen"
            onChange={(e) => handleOnchange(e)}
            value="black"
          />
          <CheckBoxCustom
            label="Đỏ"
            onChange={(e) => handleOnchange(e)}
            value="red"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Filter;
