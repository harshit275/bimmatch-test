import React from "react";

const ProductContext = {
  products: [],
  addProduct: product => {},
  removeProduct: productId => {}
};

export default React.createContext(ProductContext);
