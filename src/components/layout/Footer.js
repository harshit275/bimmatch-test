import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer">
    <div className="footer-copyright">
      <div className="container">
        <p className="grey-text text-lighten-4">
          Copyright © 2019 <Link to="/home">BIMMATTER</Link> LTD. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
