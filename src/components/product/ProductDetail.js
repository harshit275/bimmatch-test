import React, { useContext } from "react";
import productContext from "../../context/product-context";

const ProductDetail = props => {
  const id = props.match.params.id;
  const context = useContext(productContext);
  const product = context.products.find(el => el.id === id);

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{product.title}</span>
          <p>{product.detail}</p>
          <p>
            <span className="grey-text">Materials: </span>
            {product.material}
          </p>
          <p>
            <span className="grey-text">Size:</span> {product.size}
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <p>Created by {product.createdBy}</p>
          <p className="grey-text">Created at {product.createdAt}}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
