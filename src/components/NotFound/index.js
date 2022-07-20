import classNames from "classnames/bind";
import React from "react";

import styles from "./NotFound.module.scss";

const cx = classNames.bind(styles);

function NotFound() {
  return (
    <div className={cx("notfound-container")}>
      <h2>Xin lỗi</h2>
      <h2>Trang không tìm thấy</h2>
      <span>Vui lòng kiểm trai lại đường dẫn URL</span>
    </div>
  );
}

export default NotFound;
