import React, { Component } from "react";
import "../assets/scss/ProductDetails.scss";
import adoration from "./../assets/images/adoration-of-the-kings-thumbnail.gif";

export default class ProductDetail extends Component {
  render() {
    return (
      <aside className="col-sm-7">
        <div className="box-luar">
          <div className="kiri">
            <div className="image">
              <img src={adoration} alt="test" />
            </div>
          </div>
          <div className="kanan">
            <div className="star">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="desc">
              <dl className="item-property">
                <dt>
                  <h1>Super Oversized T-shirt with Raw Sleeves In Brown</h1>
                </dt>
                <dd>
                  <p className="text-capitalize"></p>
                </dd>
                <dl className="currency">
                  <dt>Rp</dt>
                </dl>
                <dl className="color">
                  <dt>Color</dt>
                  <button className="blue"></button>
                  <button className="blue1"></button>
                  <button className="red"></button>
                  <button className="orange"></button>
                  <button className="yellow"></button>
                  <button className="green"></button>
                  <button className="purple"></button>
                </dl>
                <dl className="size">
                  <dt>Size</dt>
                  <button className="size-s">s</button>
                  <button className="size-m">M</button>
                  <button className="size-l">L</button>
                  <button className="size-xl">XL</button>
                  <button className="size-xxl">XXL</button>
                  <button className="size-xxxl">XXXL</button>
                </dl>
                <dl className="quantity">
                  <dt>Quantity</dt>
                  <input type="number" name="quantity" min="1" max="10" />
                </dl>
                <dl>
                  <button className="color-primary">Add to cart</button>
                </dl>
              </dl>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
