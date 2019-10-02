import React, { Component } from "react";
import { connect } from "react-redux";

import { getProduct } from "../store/actions/listProductsAction";

import "../assets/scss/HotProduct.scss";

class HotProduct extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    const subset = this.props.products.slice(0, 4);

    const listProducts = subset.map((product, index) => {
      return (
        <div className="content" key={index}>
          <img src={product.pict} alt="Product1" />
          <div className="h5">{product.productName}</div>
          <div className="h5">Rp {product.price} ,00</div>
          <div className="button-wrap">
            <button className="button-hot">Buy now</button>
          </div>
        </div>
      );
    });
    return (
      <div className="padding">
        <h2>You may also like</h2>
        <div className="wrap margin-top">{listProducts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.listProductsReducer.products
  };
};

export default connect(
  mapStateToProps,
  { getProduct }
)(HotProduct);
