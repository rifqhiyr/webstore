import React, { Component } from "react";
import "../assets/scss/HotProduct.scss";

import DataHot from "./../assets/data/HotData";

export default class HotProduct extends Component {
  render() {
    const ListData = DataHot.map(IsiData => {
      return (
        <div className="flex">
          <img src={IsiData.img} alt="Product1" />
          <h5>{IsiData.title}</h5>
          <p className="price">Rp {IsiData.price}</p>
          <div className="button-wrap">
            <button className="button">Buy now</button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2 className="padding">You may also like</h2>
        <div className="wrap">{ListData}</div>
      </div>
    );
  }
}
