import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import M from "materialize-css";

import authContext from "../../context/auth-context";

const Navbar = ({ user }) => {
  const context = useContext(authContext);

  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }, []);

  const handleClick = e => {
    e.preventDefault();
    context.signout();
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/home" className="brand-logo">
            Bimmatch
          </Link>
          <a href="#" data-target="mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          {!user && (
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink to="/login">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/register">Sign Up</NavLink>
              </li>
            </ul>
          )}
          {user && (
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink to="/product/add">Add Product</NavLink>
              </li>
              <li>
                <button
                  className="waves-effect waves-teal white-text btn-flat"
                  onClick={handleClick}
                >
                  Sign Out
                </button>
              </li>
              <li>
                <NavLink to="/" className="btn btn-floating pink">
                  BM
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <ul className="sidenav  grey lighten-3" id="mobile">
        <div className="container">
          {!user && (
            <>
              <li>
                <NavLink to="/login">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink to="/product/add">Add Product</NavLink>
              </li>
              <li>
                <button
                  className="waves-effect waves-teal btn-flat"
                  onClick={handleClick}
                >
                  Sign Out
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </>
  );
};

export default Navbar;
