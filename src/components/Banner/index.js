import classNames from "classnames/bind";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import bannerImg1 from "../../assets/image/bannerImg1.png";
import bannerImg2 from "../../assets/image/bannerImg2.png";
import bannerImg3 from "../../assets/image/bannerImg3.png";
import styles from "./Banner.module.scss";

import Button from "../GlobalComponents/Button";
const cx = classNames.bind(styles);

const data = [
  {
    title: "Polo nữ Pima cao cấp",
    description:
      "Nhắc đến sự đẳng cấp là không thể không nhắc đến dòng vải pima. Nó tạo nên chất lượng tốt nhất cho bất kỳ sản phẩm thời trang nào. Sợi vải pima dài và dày hơn sợi cotton thông thường gấp đôi nhờ công nghệ dệt tân tiến. Điều đó làm cho kết cấu áo polo chắc chắn, bền chặt, hạn chế tối đa xù lông, mềm mượt, bền màu, vô cùng đảm bảo sức khoẻ người dùng",
    image: bannerImg1,
    color: "#01569E",
  },
  {
    title: "Polo Nữ Dáng Suông Modal",
    description:
      "Polo nữ dáng suông Modal sử dụng công nghệ vải cao cấp thân thiện với môi trường sản xuất độc quyền chống co rút vải, áo polo nữ vải modal là sản phẩm thích hợp cho các bạn có môi trường làm việc năng động như hiện nay",
    image: bannerImg2,
    color: "#FF7E73",
  },
  {
    title: "Polo Nữ Coolmax Lacoste",
    description:
      "Mẫu áo polo nữ được làm bằng chất liệu coolmax đem lại cảm giác mát lạnh khi mặc. Thiết kế mẫu áo polo coolmax này có kiểu dáng cực kỳ thoải mái. Tạo sự gọn gàng hứa hẹn sẽ là mẫu áo polo vô cùng hot trong thời điểm sắp tới",
    image: bannerImg3,
    color: "#FBB96B",
  },
];
function Banner() {
  const [indexShow, setIndexShow] = useState(0);

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

  return (
    <>
      <div className={cx("banner-container")}>
        {data.map((e, i) => (
          <div className={cx(indexShow === i ? "active" : null, "banner-item")}>
            <div className={cx("content")}>
              <div className={cx("title")}>
                <h1>{e.title}</h1>
              </div>
              <div className={cx("description")}>
                <p>{e.description}</p>
              </div>
              <Button primary className={cx("btn")}>
                <span>Xem chi tiết</span>
              </Button>
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
          <span>3/3</span>
          <Button onClick={() => handleOnClick("next")} text>
            <AiOutlineRight />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Banner;
