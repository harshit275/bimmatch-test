import React, { useReducer } from "react";

import AuthContext from "../context/auth-context";
import firebase from "../config/config";
import {
  authReducer,
  ERROR,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNOUT_SUCCESS,
  GET_USER
} from "../reducers/authReducer";

const AuthState = props => {
  const [state, dispatch] = useReducer(authReducer, {});
  const ref = firebase.firestore().collection(`users`);
  const auth = firebase.auth();

  const signIn = async values => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      dispatch({ type: SIGNIN_SUCCESS });
    } catch (err) {
      dispatch({ type: ERROR, err });
    }
  };

  const signUp = async values => {
    try {
      const res = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      delete values.email;
      delete values.password;
      let obj = {
        ...values,
        initials: values.firstName[0] + values.lastName[0]
      };
      await ref.doc(res.user.uid).set(obj);
      dispatch({ type: SIGNUP_SUCCESS, user: res.user });
    } catch (err) {
      dispatch({ type: ERROR, err });
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch({ type: SIGNOUT_SUCCESS });
    } catch (err) {
      dispatch({ type: ERROR, err });
    }
  };

  const getUser = () => {
    let user = firebase.auth().currentUser;
    if (user) {
      let userData = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        emailVerified: user.emailVerified,
        uid: user.uid
      };
      dispatch({ type: GET_USER, userData });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        user: state.user,
        signin: signIn,
        signup: signUp,
        signout: signOut,
        getuser: getUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
