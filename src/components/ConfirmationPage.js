import React, { Component } from "react";
import "../assets/scss/ConfirmationPage.scss";

class ConfirmationPage extends Component {
  render() {
    return (
      <div className="checkout-section">
        <div className="checkout-container">
          <div className="checkout-title">
            <h3>Checkout</h3>
          </div>
          <div className="checkout-wrapper">
            <div className="checkout-order">
              <h4>Order summary</h4>
              <div className="order-title">
                <div className="item-1">
                  <h4>Item</h4>
                </div>
                <div className="item-2">
                  <h4>Qty</h4>
                </div>
                <div className="item-3">
                  <h4>Price</h4>
                </div>
              </div>
              <div className="order-items">
                <div className="item-1">
                  <p>Green T-Shirt 2016 Men BK3569</p>
                </div>
                <div className="item-2">
                  <p>2</p>
                </div>
                <div className="item-3">
                  <p>£14</p>
                </div>
              </div>
            </div>
            <div className="checkout-delivery">
              <h4>Delivery</h4>
              <div className="delivery-title">
                <h4>Address</h4>
              </div>
              <div className="delivery-items">
                <p>Office 64, 8 Colmore Row Birmingham, England, 42000</p>
              </div>
              <div className="delivery-title-2">
                <p>Delivery Options</p>
              </div>
              <div className="delivery-items">
                <p>Standart delivery (free, 2 - 3 days)</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="checkout-bottom">
            <div className="checkout-details">
              <input type="text" name="promo-code" placeholder="NEWYEAR8%" />
              <h4>
                Subtotal<span>£14</span>
              </h4>
              <h4>
                Shipping<span>Free</span>
              </h4>
              <h4>
                Grandtotal<span>£340</span>
              </h4>
            </div>
            <div className="checkout-options">
              <button className="btn-back">Back</button>
              <button className="btn-next">Next Step</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationPage;
