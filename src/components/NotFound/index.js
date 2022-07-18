import React from "react";
import classNames from "classnames/bind";

import styles from "./NotFound.module.scss";

const cx = classNames.bind(styles);

function NotFound() {
  return (
    <div className={cx("notfound-container")}>
      <h2>I'm sorry</h2>
      <h2>Page not found</h2>
      <span>Please check again URL</span>
    </div>
  );
}

export default NotFound;
