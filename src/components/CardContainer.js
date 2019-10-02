import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/scss/Cart.scss";
import CartList from "../components/CartList";

class CartPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="cart-wrapper">
          <div className="items-wrapper">
            <div className="table-head row">
              <div className="col-4">
                <span>Item</span>
              </div>
              <div className="col-1">
                <span>Size</span>
              </div>
              <div className="col-4 center">
                <span>Quantity</span>
              </div>
              <div className="col-3">
                <span>Price</span>
              </div>
            </div>
            {/* cart's list goes here */}
            <CartList />
          </div>
          <div className="panel-bottom row space-between">
            <Link to="/">
              <button className="circle-button-big secondary">
                Back to Shop
              </button>
            </Link>

            <button className="circle-button-big primary">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
