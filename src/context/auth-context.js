import React from "react";

const auth = {
  error: null,
  user: {},
  signin: () => {},
  signup: () => {},
  signout: () => {},
  getuser: () => {}
};

export default React.createContext(auth);
