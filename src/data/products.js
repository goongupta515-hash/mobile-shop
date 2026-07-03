import iphone from "../assets/mobiles/iphone16pro.png";
import samsung from "../assets/mobiles/samsungs25.png";
import oneplus from "../assets/mobiles/oneplus13.png";
import nothing from "../assets/mobiles/nothing3.png";
import vivo from "../assets/mobiles/vivox200.png";
import oppo from "../assets/mobiles/oppofindx8.png";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    brand: "Apple",
    price: 119999,
    rating: 5,
    image: iphone,
    featured: true,
    latest: true,
    bestseller: true,
    storage: "256GB",
    color: "Black Titanium",
  },

  {
    id: 2,
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    price: 99999,
    rating: 5,
    image: samsung,
    featured: true,
    latest: true,
    bestseller: true,
    storage: "256GB",
    color: "Titanium Gray",
  },

  {
    id: 3,
    name: "OnePlus 13",
    brand: "OnePlus",
    price: 64999,
    rating: 5,
    image: oneplus,
    featured: true,
    latest: true,
    bestseller: false,
    storage: "256GB",
    color: "Midnight Black",
  },

  {
    id: 4,
    name: "Nothing Phone 3",
    brand: "Nothing",
    price: 49999,
    rating: 4,
    image: nothing,
    featured: true,
    latest: false,
    bestseller: true,
    storage: "256GB",
    color: "White",
  },

  {
    id: 5,
    name: "Vivo X200 Pro",
    brand: "Vivo",
    price: 94999,
    rating: 5,
    image: vivo,
    featured: false,
    latest: true,
    bestseller: true,
    storage: "512GB",
    color: "Blue",
  },

  {
    id: 6,
    name: "Oppo Find X8 Pro",
    brand: "Oppo",
    price: 89999,
    rating: 5,
    image: oppo,
    featured: false,
    latest: false,
    bestseller: true,
    storage: "512GB",
    color: "Black",
  },
];

export default products;