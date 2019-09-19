import React, { Component } from "react";
import { connect } from "react-redux";

import { getProduct } from "../store/actions/listProductsAction";

import "../assets/scss/CardSidebar.scss";

class CardSidebar extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    const listProducts = this.props.products.map(product => {
      return (
        <div className="card--stuff" key={product._id}>
          {/* <img src={product.pict} alt="" /> */}
          <img src={require("../assets/images/doraemon.jpg")} alt="" />
          <h4>{product.productName}</h4>
          <p>Rp {product.price}</p>
          <p>Stock: {product.stock}</p>
          <button>Buy Now</button>
        </div>
      );
    });

    return (
      <div className="card-sidebar">
        <div className="sidebar">
          <div className="filter">
            <h4>Filter 386 Items</h4>
            <p>
              <i className="fa fas fa-times"></i>
              Gender : <span>Woman</span>
            </p>
            <p>
              <i className="fa fas fa-times"></i>
              Category : <span>Dresses</span>
            </p>
          </div>
          <div className="criteria">
            <div className="color--button">
              <h5>Color</h5>
              <div className="button__list">
                <input
                  name="button__color--list"
                  type="button"
                  className="color1"
                />
                <input
                  name="button__color--list"
                  type="button"
                  className="color2"
                />
                <input
                  name="button__color--list"
                  type="button"
                  className="color3"
                />
                <input
                  name="button__color--list"
                  type="button"
                  className="color4"
                />
                <input
                  name="button__color--list"
                  type="button"
                  className="color5"
                />
                <input
                  name="button__color--list"
                  type="button"
                  className="color6"
                />
                <input
                  name="button__color--list"
                  type="button"
                  className="color7"
                />
                <input
                  name="button__color--list"
                  type="button"
                  className="color8"
                />
              </div>
            </div>
            <div className="size--button">
              <h5>Size</h5>
              <div className="button__list2">
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
              </div>
            </div>
            <div className="price--range">
              <h5>Price range</h5>
            </div>
            <div className="brand--list">
              <h5>Brand</h5>
              <div className="brand__list--checkbox">
                <div className="list__checkbox">
                  <input type="checkbox" />
                  <label>Abercrombie</label>
                </div>
                <div className="list__checkbox">
                  <input type="checkbox" />
                  <label>Fitch</label>
                </div>
                <div className="list__checkbox">
                  <input type="checkbox" />
                  <label>Adidas Originals</label>
                </div>
                <div className="list__checkbox">
                  <input type="checkbox" />
                  <label>ASOS</label>
                </div>
                <div className="list__checkbox">
                  <input type="checkbox" />
                  <label>Cheap Monday</label>
                </div>
              </div>
            </div>
          </div>
          <div className="button--filter">
            <button className="button__apply">Apply</button>
            <button className="button__clear">
              <i className="fa fas fa-times"></i>Clear All
            </button>
          </div>
        </div>
        <div className="cardlist">{listProducts}</div>
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
)(CardSidebar);
