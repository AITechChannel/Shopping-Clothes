import classNames from "classnames/bind";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "./Banner.module.scss";
import data from "./data";
import Button from "../GlobalComponents/Button";
import { Row, Col } from "antd";
const cx = classNames.bind(styles);

function Banner() {
  const [indexShow, setIndexShow] = useState(0);

  const bannerItemElementRef = useRef();

  if (bannerItemElementRef.current) {
    const bannerItemHeight = bannerItemElementRef.current.offsetHeight;
  }

  const handleOnClick = (actionName) => {
    switch (actionName) {
      case "prev":
        if (indexShow > 0) {
          setIndexShow(indexShow - 1);
        }
        break;
      case "next": {
        if (indexShow < 2) {
          setIndexShow(indexShow + 1);
        }
      }
    }
  };

  // useEffect(() => {}, [bannerItemHeight]);

  return (
    <div className={cx("banner-container")}>
      {data.map((e, i) => (
        <div
          key={`bannerItem _${i}`}
          className={cx(indexShow === i ? "active" : null, "banner-item")}
          ref={bannerItemElementRef}
        >
          <div className={cx("content")}>
            <div className={cx("title")}>
              <h1 style={{ color: e.color }}>{e.title}</h1>
            </div>
            <div className={cx("description")}>
              <p>{e.description}</p>
            </div>
            <div className={cx("btn-container")}>
              <Button
                style={{ backgroundColor: e.color }}
                primary
                className={cx("btn")}
                to="/product/1"
              >
                Xem chi tiết
              </Button>
            </div>
          </div>

          <div className={cx("image")}>
            <img src={e.image} />
            <div
              className={cx("bg-image")}
              style={{ backgroundColor: e.color }}
            ></div>
          </div>
        </div>
      ))}

      <div className={cx("pagination")}>
        <Button onClick={() => handleOnClick("prev")} text>
          <AiOutlineLeft />
        </Button>
        <span>{indexShow + 1} / 3</span>
        <Button onClick={() => handleOnClick("next")} text>
          <AiOutlineRight />
        </Button>
      </div>
    </div>
  );
}

export default Banner;
