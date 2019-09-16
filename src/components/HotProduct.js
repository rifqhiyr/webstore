import React, { Component } from "react";
import "../assets/scss/HotProduct.scss";

import DataHot from "./../assets/data/HotData";

export default class HotProduct extends Component {
  render() {
    const dataList = DataHot.map(data => {
      return (
        <div className="flex">
          <img src={data.img} alt="Product1" />
          <h5 className="h5">{data.title}</h5>
          <p className="price">Rp {data.price}</p>
          <div className="button-wrap">
            <button className="button-hot">Buy now</button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2 className="padding">You may also like</h2>
        <div className="wrap">{dataList}</div>
      </div>
    );
  }
}
