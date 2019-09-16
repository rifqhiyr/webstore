import React, { Component } from "react";
import "../assets/scss/HotProduct.scss";
import Product1 from "./../assets/images/afghan-flower.gif";

export default class HotProduct extends Component {
  render() {
    return (
      <div>
        <h2 className="padd">You may also like</h2>
        <div className="wrap">
          <div className="flex">
            <img src={Product1} alt="Product1" />
            <h5>New look T-Shirt In Gradient Fade</h5>
            <p className="price">Rp 140.000</p>
            <div className="buttwrap">
              <button className="butt">Buy now</button>
            </div>
          </div>
          <div className="flex">
            <img src={Product1} alt="Product1" />
            <h5>New look T-Shirt In Gradient Fade</h5>
            <p className="price">Rp 140.000</p>
            <div className="buttwrap">
              <button className="butt">Buy now</button>
            </div>
          </div>
          <div className="flex">
            <img src={Product1} alt="Product1" />
            <h5>New look T-Shirt In Gradient Fade</h5>
            <p className="price">Rp 140.000</p>
            <div className="buttwrap">
              <button className="butt">Buy now</button>
            </div>
          </div>
          <div className="flex">
            <img src={Product1} alt="Product1" />
            <h5>New look T-Shirt In Gradient Fade</h5>
            <p className="price">Rp 140.000</p>
            <div className="buttwrap">
              <button className="butt">Buy now</button>
            </div>
          </div>
          <div className="flex">
            <img src={Product1} alt="Product1" />
            <h5>New look T-Shirt In Gradient Fade</h5>
            <p className="price">Rp 140.000</p>
            <div className="buttwrap">
              <button className="butt">Buy now</button>
            </div>
          </div>
        </div>
        <div className="pad">
          <hr></hr>
        </div>
      </div>
    );
  }
}
