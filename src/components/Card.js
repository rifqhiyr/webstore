import React, { Component } from "react";
import { connect } from "react-redux";

import { getProduct } from "../store/actions/listProductsAction";
import setToken from "../helpers/setToken";

import "../assets/scss/Card.scss";

if (localStorage.token) {
  setToken(localStorage.token);
}

class Card extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    const listProducts = this.props.products.map(product => {
      return (
        <div className="card-1">
          <div>
            <h4>HOT</h4>
          </div>
          {/* <img src={product.pict} alt="" /> */}
          <img src={require("../assets/images/uniqlo1.jpg")} alt="" />
          <h3>{product.productName}</h3>
          <h4>Rp {product.price},00</h4>
        </div>
      );
    });

    return <div className="c-grid c-hover">{listProducts}</div>;
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
)(Card);
