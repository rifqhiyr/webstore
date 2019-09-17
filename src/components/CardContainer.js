import React, { Component } from "react";
import "../assets/scss/Cart.scss";
import CartList from "../components/CartList";

class CartPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="cart-wrapper">
          <div className="items-wrapper">
            <div className="head row space-between">
              <div className="title">
                <h2>4 Items in Your Cart</h2>
              </div>
              <div className="close-box">
                <i className="fa fa-close"></i>
              </div>
            </div>
            <div className="table-head row">
              <div className="col-6">
                <span>Item</span>
              </div>
              <div className="col-1">
                <span>Size</span>
              </div>
              <div className="col-4 center">
                <span>Quantity</span>
              </div>
              <div className="col-1">
                <span>Price</span>
              </div>
            </div>
            {/* cart's list goes here */}
            <CartList />
            <CartList />
            <CartList />
            <CartList />
          </div>
          <div className="panel-bottom row space-between">
            <button className="circle-button-big secondary">
              Back to Shop
            </button>
            <button className="circle-button-big primary">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
