
import { Products } from "@/Types";
import pro1 from "/public/pro1.jpg";
import pro2 from "/public/pro2.jpg";
import pro3 from "/public/pro3.jpg";
import male1 from "/public/male1.jpg"
import male2 from "/public/male2.jpg"
import male3 from "/public/male3.jpg"
import kid1 from "/public/kid1.jpg"

export const AllProducts: Products[] = [
  {
    id: 1,
    title: "Women Red Sweater",
    price: 39,
    catagory: "female",
    image: pro1,
  },
  {
    id: 2,
    title: " Leather jacket",
    price: 59,
    catagory: "female",
    image: pro2,
  },
  {
    id: 3,
    title: "classy SweatShirt",
    price: 19,
    catagory: "female",
    image: pro3,
  },
  {
    id: 4,
    title: "classy SweatShirt",
    price: 19,
    catagory: "male",
    image: male1,
  },
  {
    id: 5,
    title: "classy SweatShirt",
    price: 19,
    catagory: "male",
    image: male2,
  },
  {
    id: 6,
    title: "classy SwaeatShirt",
    price: 19,
    catagory: "male",
    image: male3,
  },
  {
    id: 7,
    title: "classy SwaeatShirt",
    price: 19,
    catagory: "kids",
    image: kid1,
  },
  {
    id: 8,
    title: "classy SwaeatShirt",
    price: 19,
    catagory: "kids",
    image: kid1,
  },
];
