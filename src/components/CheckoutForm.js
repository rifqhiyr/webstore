import React, { Component } from "react";
import "../assets/scss/Checkout.scss";

export default class CheckoutPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="checkout-wrapper">
          <div className="items-wrapper">
            <div className="title">
              <h2>Checkout</h2>
            </div>
            <div className="form">
              <div className="form-flex">
                <div className="col-6">
                  <p className="grey">
                    <strong>First name *</strong>
                  </p>
                  <input
                    type="text"
                    className="checkout-input"
                    id=""
                    placeholder="First name"
                  />
                </div>
                <div className="col-6">
                  <p className="grey">
                    <strong>Last name *</strong>
                  </p>
                  <input
                    type="text"
                    className="checkout-input"
                    id=""
                    placeholder="Last name"
                  />
                </div>
                <div className="col-6">
                  <p className="grey">
                    <strong>Address *</strong>
                  </p>
                  <input
                    type="text"
                    className="checkout-input"
                    id=""
                    placeholder="Address"
                  />
                </div>
                <div className="col-6">
                  <p className="grey">
                    <strong>City *</strong>
                  </p>
                  <input
                    type="text"
                    className="checkout-input"
                    id=""
                    placeholder="City"
                  />
                </div>
                <div className="col-6">
                  <p className="grey">
                    <strong>State *</strong>
                  </p>
                  <input
                    type="text"
                    className="checkout-input"
                    id=""
                    placeholder="State"
                  />
                </div>
                <div className="col-6">
                  <p className="grey">
                    <strong>ZIP Code *</strong>
                  </p>
                  <input
                    type="text"
                    className="checkout-input"
                    id=""
                    placeholder="ZIP Code"
                  />
                </div>
              </div>
              <br />
              <div className="col-12">
                <p>
                  <span className="grey">
                    <strong>Country:</strong>
                  </span>
                  <span> Indonesia *</span>
                </p>
                <label htmlFor="billingCheck">
                  <input type="checkbox" id="billingCheck" />
                  <span>
                    My billing information is the same as my delivery
                    information.
                  </span>
                </label>
                <br />
                <br />
                <hr style={{ border: "1px solid #ddd" }} />
              </div>
              <div className="col-12">
                <h2>Delivery Options</h2>
                <div className="row space-between">
                  <label htmlFor="standardShipping">
                    <input type="radio" name="" id="standardShipping" />
                    <span>
                      <strong>Standard shipping:</strong> (Free, 2-3 business
                      days)
                    </span>
                  </label>
                  <label htmlFor="expressShipping">
                    <input type="radio" name="" id="expressShipping" />
                    <span>
                      <strong>Express shipping:</strong> (Rp28, 1-2 business
                      days)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="panel-bottom row space-between">
            <button className="circle-button-big secondary">Back</button>
            <button className="circle-button-big primary">Next Step</button>
          </div>
        </div>
      </div>
    );
  }
}
