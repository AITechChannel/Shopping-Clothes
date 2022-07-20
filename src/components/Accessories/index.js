import React from "react";
import classNames from "classnames/bind";

import styles from "./Accessories.module.scss";

const cx = classNames.bind(styles);

function Accessories() {
  return (
    <div className={cx("accessories-container")}>
      <h2>Xin lỗi!</h2>
      <h2>Admin chưa cập nhật dữ liệu</h2>
    </div>
  );
}

export default Accessories;
