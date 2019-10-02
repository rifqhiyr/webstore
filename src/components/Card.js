import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getProduct } from "../store/actions/listProductsAction";

import "../assets/scss/Card.scss";

class Card extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    const subset = this.props.products.slice(0, 3);

    const listProducts = subset.map((product, index) => {
      return (
        <div className="card-1" key={index}>
          <div>
            <h1>HOT</h1>
          </div>
          <Link to={`/detail/${product._id}`}>
            <img src={product.pict} alt="" />
            <h3>{product.productName}</h3>
          </Link>
        </div>
      );
    });

    return <div className="c-grid">{listProducts}</div>;
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
