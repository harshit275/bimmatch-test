import React, { useContext } from "react";

import authContext from "../../context/auth-context";

const SignIn = () => {
  const context = useContext(authContext);
  const values = {};

  const handleChange = e => {
    values[e.target.id] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.signin(values);
  };

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="section">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn-large waves-effect waves-light">
              Sign In
            </button>
          </div>
          <div className="center red-text">
            {context.error ? <p>{context.error}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
