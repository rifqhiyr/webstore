import React, { Component } from 'react'
import '../../../assets/scss/ConfirmationPage.scss'

class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <div className="checkout-section">
          <div className="checkout-container">
            <div className="checkout-title">
              <h3>Checkout</h3>
            </div>
            <div className="checkout-wrapper">
                {/* <div className="items-wrapper"> */}
                    <div className="form">
                        <div className="form-flex">
                          <div className="split-flex">
                            <div className="col-12">
                                <p className="grey"><strong>First name *</strong></p>
                                <input type="text" className="checkout-input" id="" placeholder="First name" />
                            </div>
                            <div className="col-12">
                                <p className="grey"><strong>Last name *</strong></p>
                                <input type="text" className="checkout-input" id="" placeholder="Last name" />
                            </div>
                            <div className="col-12">
                                <p className="grey"><strong>Address *</strong></p>
                                <input type="text" className="checkout-input" id="" placeholder="Address" />
                            </div>
                          </div>
                          <div className="split-flex">
                            <div className="col-12">
                                <p className="grey"><strong>City *</strong></p>
                                <input type="text" className="checkout-input" id="" placeholder="City" />
                            </div>
                            <div className="col-12">
                                <p className="grey"><strong>State *</strong></p>
                                <input type="text" className="checkout-input" id="" placeholder="State" />
                            </div>
                            <div className="col-12">
                                <p className="grey"><strong>ZIP Code *</strong></p>
                                <input type="text" className="checkout-input" id="" placeholder="ZIP Code" />
                            </div>
                          </div>
                        </div>
                        <br/>
                        <div className="col-12">
                            <p>
                                <span className="grey"><strong>Country:</strong></span>
                                <span> Indonesia *</span>
                            </p>
                            <label htmlFor="billingCheck">
                                <input type="checkbox" id="billingCheck" />
                                <span>My billing information is the same as my delivery information.</span>
                            </label>
                            <br/>
                            <br/>
                        </div>
                        <div className="col-12">
                            <h2>Delivery Options</h2>
                            <div className="row space-between">
                                <label htmlFor="standardShipping">
                                    <input type="radio" name="" id="standardShipping"/>
                                    <span><strong>Standard shipping:</strong> (Free, 2-3 business days)</span>
                                </label>
                                <label htmlFor="expressShipping">
                                    <input type="radio" name="" id="expressShipping"/>
                                    <span><strong>Express shipping:</strong> (Rp28, 1-2 business days)</span>
                                </label>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                <br/><br/>
            </div><hr/>
            <div className="checkout-wrapper">
              <div className="checkout-order">
                <h4>Order summary</h4>
                <div className="order-title">
                  <div className="item-1"><h4>Item</h4></div>
                  <div className="item-2"><h4>Qty</h4></div>
                  <div className="item-3"><h4>Price</h4></div>
                </div>
                <div className="order-items">
                  <div className="item-1"><p>Green T-Shirt 2016 Men BK3569</p></div>
                  <div className="item-2"><p>2</p></div>
                  <div className="item-3"><p>£14</p></div>
                </div>
                <div className="order-items">
                  <div className="item-1"><p>Green T-Shirt 2016 Men BK3569</p></div>
                  <div className="item-2"><p>2</p></div>
                  <div className="item-3"><p>£14</p></div>
                </div>
                <div className="order-items">
                  <div className="item-1"><p>Green T-Shirt 2016 Men BK3569</p></div>
                  <div className="item-2"><p>2</p></div>
                  <div className="item-3"><p>£14</p></div>
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
            <div className="checkout-bottom">
              <div className="checkout-details">
                <input type="text" name="promo-code" placeholder="NEWYEAR8%" />
                <h4>Subtotal<span>£14</span></h4>
                <h4>Shipping<span>Free</span></h4>
                <h4>Grandtotal<span>£340</span></h4>
              </div>
            </div>
            <hr />
            <div className="payment">
              <label htmlFor="1">
                <div className="visa-options">
                  <img src={require("../../../assets/images/visamastercard.png")} alt="" /><br /><br />
                  <input type="radio" name="Visa" id="1" />
                  <span>Pay with Credit Card</span>
                </div>
              </label>
              <label htmlFor="2">
                <div className="paypal-options">
                  <img src={require("../../../assets/images/paypal.png")} alt="" /><br /><br />

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
                  <p>* CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.</p>
                </div>
              </div>
            </div>
            <div className="checkout-options">
              <button className="btn-back">Back</button>
              <button className="btn-next">Next Step</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckoutPage