import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import LoginPage from "./components/views/LoginPage";
import RegisterPage from "./components/views/RegisterPage";
import DetailPage from "./components/views/DetailPage";
import CartPage from "./components/views/CartPage";
import CheckoutPage from "./components/views/CheckoutPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/detail" exact component={DetailPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
      </Router >
    );
  }
}

export default App;
