import React from "react";
import { Link } from "react-router-dom";

import ProductList from "../product/ProductList";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <ProductList />
          <Link
            to="/product/add"
            className="btn-large waves-effect waves-light"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
        <div className="col s12 m6"></div>
      </div>
    </div>
  );
};

export default Dashboard;
