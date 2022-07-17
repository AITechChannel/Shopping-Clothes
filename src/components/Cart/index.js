import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { Col, Row, Divider } from "antd";
import Button from "../GlobalComponents/Button";
import img from "../../assets/productImage/1_1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { FiTrash } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import clothesSLice from "../../redux/sliceReducer/clothesSlice";

import NumberFormat from "react-number-format";
const cx = classNames.bind(styles);

function Cart({ md = 6 }) {
  const [data, setData] = useState();
  const [total, setTotal] = useState();
  const [number, setNumber] = useState(1);

  console.log("render");

  const dispatch = useDispatch();

  const handleOnClick = (actionName, id) => {
    switch (actionName) {
      case "del":
        dispatch(clothesSLice.actions.delCart(id));
        console.log(id);
        break;
      case "increase":
        setNumber(number + 1);
        dispatch(
          clothesSLice.actions.updateCart({
            actionName: "increase",
            id: id,
            value: number,
          })
        );
        console.log(id);
        break;
      case "decrease":
        setNumber(number - 1);
        break;
    }
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const dataJsonCart = localStorage.getItem("cart");

    const dataCart = JSON.parse(dataJsonCart);
    console.log(dataCart);

    dispatch(clothesSLice.actions.addCart({ initCart: dataCart }));

    if (dataCart) {
      const total = dataCart.reduce((total, e, i) => {
        return total + e.data.priceNow * e.number;
      }, 0);
      setTotal(total);
    }
    setData(dataCart);
  }, []);
  const dataRedux = useSelector((state) => state.store.cart);

  useEffect(() => {
    const jsonData = JSON.stringify(dataRedux);
    if (dataRedux.length > 0) {
      localStorage.setItem("cart", jsonData);
    }
  }, [dataRedux]);

  return (
    <div className={cx("cart-container")}>
      <Row gutter={[24, 24]}>
        <Col md={8} xl={8}>
          <div className={cx("order")}>
            <p>
              Bạn đang có <span>4</span> sản phẩm trong giỏ hàng
            </p>
            <div className={cx("total")}>
              <span>Tổng tiền</span>{" "}
              <span className={cx("total-number")}>
                <NumberFormat
                  value={total}
                  className="foo"
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" đ"}
                  // renderText={(value, props) => <span {...props}>{value}</span>}
                />
              </span>
            </div>
            <Button className={cx("btn-fullwidth")} primary>
              Đặt hàng
            </Button>
            <Button className={cx("btn-fullwidth")} primary>
              Tiếp tục mua hàng
            </Button>
          </div>
        </Col>
        <Col md={16} xl={16}>
          {data &&
            data.map((e, i) => (
              <div>
                <div className={cx("product-item")}>
                  <div className={cx("image")}>
                    <img src={e.data.imageModel} />
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
                          // renderText={(value, props) => <span {...props}>{value}</span>}
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
