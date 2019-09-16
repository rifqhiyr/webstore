import React, { Component } from "react";
import "../assets/scss/ProductReview.scss";

export default class ProductReview extends Component {
  render() {
    return (
      <div>
        <h2 className="padding">Product reviews</h2>
        <div className="row">
          <div className="side">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <h3>Pablo Permins</h3>
            <p className="smallFont">one hour ago</p>
          </div>

          <div className="main">
            <p className="mediumFont">
              Got this the post the other day and right from opening the packet
              I knew this was quality, put it on and I was right!! Well done
            </p>
            <i class="fa fa-heart love">&nbsp;&nbsp;</i>113
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-comment">&nbsp;&nbsp;</i>6
          </div>
        </div>
      </div>
    );
  }
}
