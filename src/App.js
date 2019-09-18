import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./components/views/HomePage"
import LoginPage from "./components/views/LoginPage"
import RegisterPage from "./components/views/RegisterPage"
import DetailPage from "./components/views/DetailPage"
import CheckoutPage from "./components/views/CheckoutPage"
import CardPage from "./components/views/CartPage"
import ProductDetail from "./components/ProductDetail"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/detail" exact component={DetailPage} />
        <Route path="/cart" exact component={CardPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <ProductDetail />
      </Router>
    )
  }
}

export default App
