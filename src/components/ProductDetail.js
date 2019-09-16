import React, { Component } from "react"
import "../assets/scss/ProductDetails.scss"

export default class ProductDetail extends Component {
  // state = {
  //   title,
  //   price,
  //   color,
  //   size,
  //   quantity
  // }
  render() {
    return (
      <aside className="col-sm-7">
        <article className="card-body p-5">
          <h3 className="title mb-3"></h3>
          <p className="price-detail-wrap">
            <span classNmae="price h3 text-warning">
              <span className="currency">Rp</span>
              <span className="num"></span>
            </span>
          </p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <dl className="item-property">
            <dt>Description</dt>
            <dd>
              <p className="text-capitalize"></p>
            </dd>
            <dl className="param param-feature">
              <dt>Brand</dt>
            </dl>
            <dl className="color">
              <dt>Color</dt>
            </dl>
            <dl className="param param-feature">
              <dt>Size</dt>
            </dl>
            <dl className="quantity">
              <dt>Quantity</dt>
            </dl>
            <dl>
              <button className="color-primary">Add to cart</button>
            </dl>
          </dl>
        </article>
      </aside>
    )
  }
}
