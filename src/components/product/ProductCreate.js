import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import productContext from "../../context/product-context";

const ProductCreate = () => {
  const context = useContext(productContext);
  const history = useHistory();
  const values = {};

  const handleChange = e => {
    values[e.target.id] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.addProduct(values);
    history.push("/home");
  };

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Add New Product</h5>
        <div className="section">
          <div className="input-field">
            <label htmlFor="title">Product Name</label>
            <input
              id="title"
              type="text"
              className="validate"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="material">Product Material</label>
            <input
              id="material"
              type="text"
              className="validate"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="size">Product Size</label>
            <input
              id="size"
              type="number"
              className="validate"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="detail">Product Detail</label>
            <textarea
              id="detail"
              className="materialize-textarea validate"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn-large waves-effect waves-light">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductCreate;
