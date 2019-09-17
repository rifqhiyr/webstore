import React from "react";

const Product = () => {
  return (
    <div className="table-body row">
      <div className="col-6">
        <div className="col-12 row">
          <div className="col-3 product-image">
            <img src={require("../assets/images/afghan-flower.gif")} alt="" />
          </div>
          <div className="col-9">
            <h4 style={{ marginTop: "0" }}>Green T-shirt 2016</h4>
            <p>Men BK3569</p>
            <span className="small">
              <i className="fa fa-close red"></i>&nbsp; Remove
            </span>
          </div>
        </div>
      </div>
      <div className="col-1">
        <div className="col-4 center">
          <p style={{ marginTop: "0" }}>XX</p>
          <p>L</p>
        </div>
      </div>
      <div className="col-4 row justify-content-center">
        <div className="quantity-form">
          <button className="circle-button">
            <i className="fa fa-minus"></i>
          </button>
          <input type="text" className="round-input" name="" id="" value="10" />
          <button className="circle-button">
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="col-1">
        <h3 style={{ marginTop: "0" }}>Rp13</h3>
      </div>
    </div>
  );
};

export default Product;
