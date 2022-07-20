import { Col, Divider, Row } from "antd";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import clothesSLice from "../../redux/sliceReducer/clothesSlice";
import Button from "../GlobalComponents/Button";
import styles from "./Cart.module.scss";

import NumberFormat from "react-number-format";
const cx = classNames.bind(styles);

function Cart({ md = 6 }) {
  const [total, setTotal] = useState();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const dispatch = useDispatch();

  const handleOnClick = (actionName, id) => {
    switch (actionName) {
      case "del":
        dispatch(clothesSLice.actions.delCart(id));
        if (dataCartRedux.length == 1) {
          localStorage.setItem("cart", JSON.stringify([]));
        }
        break;
      case "increase":
        dispatch(
          clothesSLice.actions.updateCart({
            actionName: "increase",
            id: id,
          })
        );
        break;
      case "decrease":
        dispatch(
          clothesSLice.actions.updateCart({
            actionName: "decrease",
            id: id,
          })
        );
        break;
    }
  };

  const dataCartRedux = useSelector((state) => state.store.cart);

  useEffect(() => {
    if (dataCartRedux.length > 0) {
      const total = dataCartRedux.reduce((total, e, i) => {
        return total + e.data.priceNow * e.number;
      }, 0);
      setTotal(total);
    }
  }, [dataCartRedux]);

  return (
    <div className={cx("cart-container")}>
      <Row gutter={[24, 24]}>
        <Col xl={8} md={24} xs={24}>
          <div className={cx("order")}>
            <p>
              Bạn đang có
              <span>
                <b> {dataCartRedux.length} </b>
              </span>
              sản phẩm trong giỏ hàng
            </p>
            <div className={cx("total")}>
              <span>Tổng tiền</span>
              <span className={cx("total-number")}>
                <NumberFormat
                  value={total}
                  className="foo"
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" đ"}
                />
              </span>
            </div>
            <Button className={cx("btn-fullwidth")} primary>
              Đặt hàng
            </Button>
            <Button className={cx("btn-fullwidth")} primary to="/product">
              Tiếp tục mua hàng
            </Button>
          </div>
        </Col>
        <Col md={24} xl={16} xs={24}>
          {dataCartRedux &&
            dataCartRedux.map((e, i) => (
              <div key={`cartItem_${i}`}>
                <div className={cx("product-item")}>
                  <div className={cx("image")}>
                    <Link to={`/product/${e.data.id}`}>
                      <img src={e.data.imageModel} />
                    </Link>
                  </div>
                  <div className={cx("content")}>
                    <div className={cx("text")}>
                      <span className={cx("title")}>{e.data.title}</span>
                      <span className={cx("option")}>
                        Color: <b>{e.color}</b>
                      </span>
                      <span className={cx("option")}>
                        Size: <b>{e.size}</b>
                      </span>
                    </div>

                    <span>
                      <b>
                        <NumberFormat
                          value={e.data.priceNow}
                          className="foo"
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={" đ"}
                        />
                      </b>
                    </span>

                    <div className={cx("number-option")}>
                      <Button
                        text
                        className={cx("btn-add")}
                        onClick={() => handleOnClick("decrease", e.data.id)}
                      >
                        <span>
                          <AiOutlineLine />
                        </span>
                      </Button>
                      <div className={cx("number")}>
                        <span>{e.number}</span>
                      </div>
                      <Button
                        text
                        className={cx("btn-sub")}
                        onClick={() => handleOnClick("increase", e.data.id)}
                      >
                        <AiOutlinePlus />
                      </Button>
                    </div>

                    <Button
                      text
                      onClick={() => handleOnClick("del", e.data.id)}
                    >
                      <FiTrash />
                    </Button>
                  </div>
                </div>
                <Divider style={{ margin: "10px 0" }} />
              </div>
            ))}
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
