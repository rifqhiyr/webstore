import React, { Component } from "react";
import "../assets/scss/HotProduct.scss";

import DataHot from "./../assets/data/HotData";

export default class HotProduct extends Component {
  render() {
    const dataList = DataHot.map(data => {
      return (
        <div className="content">
          <img src={data.img} alt="Product1" />
          <div className="h5">{data.title}</div>
          <div className="price">Rp {data.price} ,00</div>
          <div className="button-wrap">
            <button className="button-hot">Buy now</button>
          </div>
        </div>
      );
    });
    return (
      <div className="padding">
        <h2>You may also like</h2>
        <div className="wrap margin-top">{dataList}</div>
      </div>
    );
  }
}
