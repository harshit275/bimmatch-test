export const ERROR = "ERROR";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const GET_USER = "GET_USER";

export const authReducer = (state, action) => {
  switch (action.type) {
    case ERROR:
      console.log(action.err);
      return { ...state, error: action.err.message };
    case SIGNIN_SUCCESS:
      console.log("Sign In success");
      return { ...state, error: null };
    case SIGNUP_SUCCESS:
      console.log("Sign Up success");
      return { ...state, error: null, user: action.user };
    case SIGNOUT_SUCCESS:
      console.log("Sign Out success");
      return { ...state, error: null, user: {} };
    case GET_USER:
      console.log("Getting user");
      return { ...state, user: action.userData };
    default:
      return state;
  }
};
