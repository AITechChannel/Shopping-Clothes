import image5_1 from "../../assets/productImage/5_1.jpg";
import image5_2 from "../../assets/productImage/5_2.jpg";

import image6_1 from "../../assets/productImage/6_1.jpg";
import image6_2 from "../../assets/productImage/6_2.jpg";

import image7_1 from "../../assets/productImage/7_1.jpg";
import image7_2 from "../../assets/productImage/7_2.jpg";

import image8_1 from "../../assets/productImage/8_1.jpg";
import image8_2 from "../../assets/productImage/8_2.jpg";

import { v4 as uuidv4 } from "uuid";

const dataProductNew = [
  {
    id: uuidv4(),
    title: "Áo thun Dinosaur 14",
    priceNow: 169000,
    priceOld: 169000,
    imageModel: image5_1,
    imageClothes: image5_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
  },
  {
    id: uuidv4(),
    title: "Áo thun Dinosaur 14",
    priceNow: 169000,
    priceOld: 169000,
    imageModel: image6_1,
    imageClothes: image6_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
  },
  {
    id: uuidv4(),
    title: "Áo thun Dinosaur 14",
    priceNow: 169000,
    priceOld: 169000,
    imageModel: image7_1,
    imageClothes: image7_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
  },
  {
    id: uuidv4(),
    title: "Áo thun Dinosaur 14",
    priceNow: 169000,
    priceOld: 169000,
    imageModel: image8_1,
    imageClothes: image8_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
  },
];

export default dataProductNew;
