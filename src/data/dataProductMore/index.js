import image9_1 from "../../assets/productImage/9_1.jpg";
import image9_2 from "../../assets/productImage/9_2.jpg";

import image10_1 from "../../assets/productImage/10_1.jpg";
import image10_2 from "../../assets/productImage/10_2.jpg";

import image11_1 from "../../assets/productImage/11_1.jpg";
import image11_2 from "../../assets/productImage/11_2.jpg";

import image12_1 from "../../assets/productImage/12_1.jpg";
import image12_2 from "../../assets/productImage/12_2.jpg";

import image1_1 from "../../assets/productImage/1_1.jpg";
import image1_2 from "../../assets/productImage/1_2.jpg";

import image2_1 from "../../assets/productImage/2_1.jpg";
import image2_2 from "../../assets/productImage/2_2.jpg";

import image3_1 from "../../assets/productImage/3_1.jpg";
import image3_2 from "../../assets/productImage/3_2.jpg";

import image4_1 from "../../assets/productImage/4_1.jpg";
import image4_2 from "../../assets/productImage/4_2.jpg";

import { v4 as uuidv4 } from "uuid";

const dataProductMore = [
  {
    id: 1,
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image1_1,
    imageClothes: image1_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
    des: "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!",
  },
  {
    id: 2,
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image2_1,
    imageClothes: image2_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
    des: "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!",
  },
  {
    id: 3,
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image3_1,
    imageClothes: image3_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
    des: "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!",
  },
  {
    id: 4,
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image4_1,
    imageClothes: image4_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
    des: "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!",
  },
  {
    id: 9,
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image9_1,
    imageClothes: image9_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
    des: "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!",
  },
  {
    id: 10,
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image10_1,
    imageClothes: image10_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
    des: "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!",
  },
  {
    id: 11,
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image11_1,
    imageClothes: image11_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
  },
  {
    id: 12,
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image12_1,
    imageClothes: image12_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
    des: "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!",
  },
];

export default dataProductMore;
