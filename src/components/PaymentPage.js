import React, { Component } from "react";

class PaymentPage extends Component {
  render() {
    return (
      <div className="checkout-section">
        <div className="checkout-container">
          <div className="checkout-title">
            <h3>Checkout</h3>
          </div>
          <div className="payment">
            <label htmlFor="1">
              <div className="visa-options">
                <img
                  src={require("../assets/images/visamastercard.png")}
                  alt=""
                />
                <br />
                <br />
                <input type="radio" name="Visa" id="1" />
                <span>Pay with Credit Card</span>
              </div>
            </label>
            <label htmlFor="2">
              <div className="paypal-options">
                <img src={require("../assets/images/paypal.png")} alt="" />
                <br />
                <br />

                <input type="radio" name="Paypal" id="2" />
                <span>Pay with PayPal</span>
              </div>
            </label>
          </div>
          <div className="payment-wrapper">
            <div className="left-items">
              <div className="top-items">
                <h4>Cardholder's Name</h4>
                <input type="text" name="Cardholder" id="" />
              </div>
              <div className="split-items">
                <div className="split-1">
                  <h4>Valid Thru</h4>
                  <input type="text" name="Valid" id="" />
                </div>
                <div className="split-2">
                  <h4>CVV / CVC *</h4>
                  <input type="text" name="Valid" id="" />
                </div>
              </div>
            </div>
            <div className="right-items">
              <div className="top-items">
                <h4>Card number</h4>
                <input type="text" name="Card Number" id="" />
              </div>
              <div className="split-items">
                <div className="helper"></div>
                <p>
                  * CVV or CVC is the card security code, unique three digits
                  number on the back of your card separate from its number.
                </p>
              </div>
            </div>
          </div>
          <div className="checkout-options">
            <button className="btn-back">Back</button>
            <button className="btn-next">Next Step</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
