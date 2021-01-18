let initialState = [
  {
    id: 1,
    name: "Iphone 7 Plus",
    image:
      "https://cdn.mobilecity.vn/mobilecity-vn/images/2019/01/iphone-7-red.jpg",
    description: "Sản phẩm do apple sản phẩm",
    price: 500,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "Iphone X",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    description: "Sản phẩm do apple sản phẩm",
    price: 900,
    inventory: 15,
    rating: 3,
  },
  {
    id: 3,
    name: "Iphone 11",
    image:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/2132584444.jpeg",
    description: "Sản phẩm do apple sản phẩm",
    price: 1100,
    inventory: 20,
    rating: 5,
  },
  {
    id: 4,
    name: "Iphone 12",
    image:
      "https://specials-images.forbesimg.com/imageserve/5f51764d1e91a64567505ad9/960x0.jpg?fit=scale",
    description: "Sản phẩm do apple sản phẩm",
    price: 1100,
    inventory: 20,
    rating: 5,
  },
  {
    id: 5,
    name: "Iphone 13",
    image:
      "https://th.bing.com/th/id/OIP.jnXNLwick4h1-iHNAakX1wHaHa?pid=Api&rs=1",
    description: "Sản phẩm do apple sản phẩm",
    price: 1200,
    inventory: 20,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
