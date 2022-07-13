import React from "react";
import Header from "../../Header";
import Footer from "../../Footer/inex";
import classNames from "classnames/bind";
import styles from "./MainLayout.module.scss";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
