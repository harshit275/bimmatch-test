import React, { useContext } from "react";
import { Link } from "react-router-dom";

import productContext from "../../context/product-context";

const ProductList = () => {
  const context = useContext(productContext);
  const products = context.products;

  if (products.length === 0) {
    context.listProduct();
  } else {
    console.log(context);
  }

  return (
    <div className="section">
      {products &&
        products.map(product => (
          <div className="card" key={product.id}>
            <Link to={"/product/" + product.id}>
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">{product.title}</span>
                <p>Created by {product.createdBy}</p>
                <p className="grey-text">Created at {product.createdAt}</p>
              </div>
            </Link>
            <div className="card-action">
              <button
                className="btn-floating btn-small waves-effect waves-light red"
                onClick={context.removeProduct.bind(this, product.id)}
              >
                <i className="material-icons">delete</i>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
