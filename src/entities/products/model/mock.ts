import type { IProduct } from "../../../shared/model/type";

import ProductImage1 from "../../../shared/assets/image/product-image-1.jpg.webp";
import ProductImage2 from "../../../shared/assets/image/product-image-2.jpg.webp";
import ProductImage3 from "../../../shared/assets/image/product-image-3.jpg.webp";
import ProductImage4 from "../../../shared/assets/image/product-image-4.jpg.webp";
import ProductImage5 from "../../../shared/assets/image/product-image-5.jpg.webp";
import ProductImage6 from "../../../shared/assets/image/product-image-6.jpg.webp";
import ProductImage7 from "../../../shared/assets/image/product-image-7.png.webp";
import ProductImage8 from "../../../shared/assets/image/product-image-8.jpg.webp";

export const PRODUCT_LIST: IProduct[] = [
  {
    title: "Кулер для процессора ID-COOLING SE-224-XTS ARGB",
    origin: "Россия",
    price: {
      current: 199900,
      currency: "RUB",
    },
    imageUrl: ProductImage1,
  },
  {
    title: "6.1 Смартфон Apple iPhone 15 128 ГБ черный",
    origin: "США",
    price: {
      current: 100000,
      currency: "USD",
    },
    imageUrl: ProductImage2,
  },
  {
    title: "Wi-Fi роутер Huawei AX1",
    origin: "Россия",
    price: {
      current: 149900,
      currency: "RUB",
    },
    imageUrl: ProductImage3,
  },
  {
    title: "Микроволновая печь DEXP MB-70 черный",
    origin: "Россия",
    price: {
      current: 399900,
      currency: "RUB",
    },
    imageUrl: ProductImage4,
  },
  {
    title: "Кондиционер настенный сплит-система DEXP AC-CD7ONF белый",
    origin: "Россия",
    price: {
      current: 1499900,
      currency: "RUB",
    },
    imageUrl: ProductImage5,
  },
  {
    title: "6.78 Смартфон Infinix NOTE 50 Pro 256 ГБ бежевый",
    origin: "Россия",
    price: {
      current: 2499900,
      currency: "RUB",
    },
    imageUrl: ProductImage6,
  },
  {
    title: "Фитнес-браслет Xiaomi Smart Band 9",
    origin: "Франция",
    price: {
      current: 30000,
      currency: "EUR",
    },
    imageUrl: ProductImage7,
  },
  {
    title:
      "Видеокарта Palit GeForce RTX 5060 Ti Infinity 3 [NE7506T019T1-GB2061S]",
    origin: "Россия",
    price: {
      current: 46799,
      currency: "RUB",
    },
    imageUrl: ProductImage8,
  },
];
