import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
  // Link
} from "react-router-dom";

import "./App.css";
import firebase from "./config/config";
import AuthState from "./state/AuthState";
import GlobalState from "./state/GlobalState";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dash/Dashboard";
import ProductCreate from "./components/product/ProductCreate";
import ProductDetail from "./components/product/ProductDetail";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(resUser) {
      if (resUser) {
        let tempUser = {
          name: resUser.displayName,
          email: resUser.email,
          uid: resUser.uid
        };
        setUser(tempUser);
      }
    });
  }, []);

  return (
    <AuthState>
      <GlobalState user={user}>
        <Router>
          <div className="Body">
            <Navbar user={user} />
            <main className="Main">
              <Switch>
                {user && <Route exact path="/home" component={Dashboard} />}
                {user && (
                  <Route exact path="/product/add" component={ProductCreate} />
                )}
                {user && (
                  <Route exact path="/product/:id" component={ProductDetail} />
                )}
                {!user && <Route exact path="/login" component={SignIn} />}
                {!user && <Route exact path="/register" component={SignUp} />}
                {user && <Redirect exact from="/login" to="/home" />}
                {user && <Redirect exact from="/register" to="/login" />}
                {!user && <Redirect exact from="/home" to="/login" />}
                {!user && <Redirect exact from="/product/add" to="/login" />}
                {!user && <Redirect exact from="/product/:id" to="/login" />}
                {user ? (
                  <Redirect exact from="/" to="/home" />
                ) : (
                  <Redirect exact from="/" to="/login" />
                )}
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </GlobalState>
    </AuthState>
  );
}

export default App;
