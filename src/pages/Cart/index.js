import classNames from "classnames/bind";
import React, { useEffect } from "react";
import styles from "./Cart.module.scss";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { Col, Row, Divider } from "antd";
import Button from "../../components/GlobalComponents/Button";
import img from "../../assets/productImage/1_1.jpg";

import { FiTrash } from "react-icons/fi";
import { useLocation } from "react-router-dom";
const cx = classNames.bind(styles);

function Cart({ data, md = 6, onClick }) {
  const handleOnClick = (actionName, id) => {
    onClick(actionName, id);
  };
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
              <span className={cx("total-number")}>1,000,000,000</span>
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
          <div className={cx("product-item")}>
            <div className={cx("image")}>
              <img src={img} />
            </div>
            <div className={cx("content")}>
              <div className={cx("text")}>
                <span className={cx("title")}>
                  Cong hoa xa hoi chu nghia viet nam
                </span>
                <span className={cx("option")}>
                  Color: <b>white</b>
                </span>
                <span className={cx("option")}>
                  Size: <b>xl</b>
                </span>
              </div>

              <span>
                <b>213,000</b>
              </span>
              <div className={cx("number-option")}>
                <Button text className={cx("btn-add")}>
                  <span>
                    <AiOutlineLine />
                  </span>
                </Button>
                <div className={cx("number")}>
                  <span>1</span>
                </div>
                <Button text className={cx("btn-sub")}>
                  <AiOutlinePlus />
                </Button>
              </div>

              <Button text>
                <FiTrash />
              </Button>
            </div>
          </div>
          <Divider style={{ margin: "10px 0" }} />
          <div className={cx("product-item")}>
            <div className={cx("image")}>
              <img src={img} />
            </div>
            <div className={cx("content")}>
              <div className={cx("text")}>
                <span className={cx("title")}>
                  Cong hoa xa hoi chu nghia viet nam
                </span>
                <span className={cx("option")}>
                  Color: <b>white</b>
                </span>
                <span className={cx("option")}>
                  Size: <b>xl</b>
                </span>
              </div>

              <span>
                <b>213,000</b>
              </span>
              <div className={cx("number-option")}>
                <Button text className={cx("btn-add")}>
                  <span>
                    <AiOutlineLine />
                  </span>
                </Button>
                <div className={cx("number")}>
                  <span>1</span>
                </div>
                <Button text className={cx("btn-sub")}>
                  <AiOutlinePlus />
                </Button>
              </div>

              <Button text>
                <FiTrash />
              </Button>
            </div>
          </div>
          <Divider style={{ margin: "10px 0" }} />
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
