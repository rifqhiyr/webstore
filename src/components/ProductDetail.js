import React, { Component } from "react"
import adoration from "./../assets/images/adoration-of-the-kings-thumbnail.gif"
import flower from "./../assets/images/afghan-flower-thumbnail.gif"
import albania from "./../assets/images/albania-flower.gif"
import "../assets/scss/ProductDetail.scss"

export default class ProductDetail extends Component {
  render() {
    return (
      <div className="split left">
        <div className="image">
          <img src={adoration} alt="images" />
          <div className="flex-image">
            <div>
              <img src={flower} alt="images" />
            </div>
            <div>
              <img src={albania} alt="images" />
            </div>
            <div>
              <img src={flower} alt="images" />
            </div>
          </div>
        </div>

        <div className="split right">
          <div className="text">
            <p>Home</p>
            <p className="dot">.</p>
            <p>All Categories</p>
            <p className="dot">.</p>
            <p>Mens's Clothing & Accessories</p>
          </div>
          <div className="stars">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <div className="title">
            <h2>Super OverSized T-Shirt with Raw Sleeves In Brown</h2>
          </div>
          <div className="price">
            <h3>Rp. 1.000.000.00,-</h3>
          </div>
          <div className="color">
            <p>Color</p>
            <div className="colors-name">
              <button className="donker"></button>
              <button className="blue"></button>
              <button className="red"></button>
              <button className="orange"></button>
              <button className="yellow"></button>
              <button className="green"></button>
              <button className="purple"></button>
            </div>
            <div className="size">
              <p>Size</p>
              <div className="size-box">
                <button className="xs">XS</button>
                <button className="s">S</button>
                <button className="m">M</button>
                <button className="l">L</button>
                <button className="xl">XL</button>
                <button className="xxl">XXL</button>
              </div>

              <div className="quantity">
                Quantity
                <input type="number" name="quantity" min="1" max="10" />
              </div>
              <div className="submit">
                <button className="submit-1">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
