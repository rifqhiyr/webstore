import React, { Component } from "react";
import "../assets/scss/ProductReview.scss";

export default class ProductReview extends Component {
  render() {
    return (
      <div className="padding">
        <h2>Product reviews</h2>
        <div className="row-1 margin-top">
          <div className="col-30">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <div className="h3">Pablo Permins</div>
            <div className="small-font">one hour ago</div>
          </div>

          <div className="col-70">
            <div className="medium-font">
              Got this the post the other day and right from opening the packet
              I knew this was quality, put it on and I was right!! Well done
            </div>
            <i class="fa fa-heart love">&nbsp;&nbsp;</i>113
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-comment">&nbsp;&nbsp;</i>6
          </div>
        </div>
      </div>
    );
  }
}
