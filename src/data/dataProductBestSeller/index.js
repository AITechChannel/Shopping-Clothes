import image1_1 from "../../assets/productImage/1_1.jpg";
import image1_2 from "../../assets/productImage/1_2.jpg";

import image2_1 from "../../assets/productImage/2_1.jpg";
import image2_2 from "../../assets/productImage/2_2.jpg";

import image3_1 from "../../assets/productImage/3_1.jpg";
import image3_2 from "../../assets/productImage/3_2.jpg";

import image4_1 from "../../assets/productImage/4_1.jpg";
import image4_2 from "../../assets/productImage/4_2.jpg";

import { v4 as uuidv4 } from "uuid";

const dataProductBestSeller = [
  {
    id: uuidv4(),
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image1_1,
    imageClothes: image1_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
  },
  {
    id: uuidv4(),
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image2_1,
    imageClothes: image2_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
  },
  {
    id: uuidv4(),
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image3_1,
    imageClothes: image3_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
  },
  {
    id: uuidv4(),
    title: "Áo thun Dinosaur 14",
    priceNow: "159,000",
    priceOld: "159,000",
    imageModel: image4_1,
    imageClothes: image4_2,
    size: ["s", "m", "xl"],
    color: ["white", "red", "yellow"],
    store: 1000,
    saleOff: "20%",
  },
];

export default dataProductBestSeller;
