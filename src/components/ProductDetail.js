import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";

import { getProductDetail } from "../store/actions/listProductsAction";

import "../assets/scss/ProductDetail.scss";

class ProductDetail extends Component {
  state = {
    quantity: 0
  };

  componentDidMount() { 
    const id = this.props.match.params.id;
    console.log(id);
    this.props.getProductDetail(id);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
 
  handleSubmit = async e => {
    e.preventDefault();
    if (localStorage.token) {
      setToken(localStorage.token);
    }

    if (localStorage.token == null) {
      alert("Please login first before adding your products to cart");
    } else {
      try {
        const body = {
          product_id: this.props.match.params.id,
          quantity: this.state.quantity
        };
        console.log(body);
        await axios.post(`https://ecommerce-mp.herokuapp.com/cart/add`, body);
        this.props.history.push("/cart");
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  render() {
    const {
      productName,
      pict,
      price,
      category,
      description
    } = this.props.product;
    return (
      <div className="product">
        <div className="split left">
          <div className="image">
            <img src={pict} alt="images" />
          </div>
        </div>

        <div className="split right">
          <div className="text">
            <p>Home</p>
            <p className="dot">.</p>
            <p>All Categories</p>
            <p className="dot">.</p>
            <p>{category}</p>
          </div>
          <div className="stars">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="title">
            <h1>{productName}</h1>
          </div>
          <div className="title">
            <h2>{description}</h2>
          </div>
          <div className="price">
            <h3>Rp {price},00</h3>
          </div>
          <div className="color">
            <p>Color</p>
            <div className="colors-name">
              <button className="donker"></button>
              <button className="blue"></button>
              <button className="red"></button>
              <button className="orange"></button>
              <button className="yellow"></button>
              <button className="green"></button>
              <button className="purple"></button>
            </div>
            <div className="size">
              <p>Size</p>
              <div className="size-box">
                <button className="xs">XS</button>
                <button className="s">S</button>
                <button className="m">M</button>
                <button className="l">L</button>
                <button className="xl">XL</button>
                <button className="xxl">XXL</button>
              </div>

              <div className="quantity">
                Quantity:&nbsp;&nbsp;&nbsp;
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="5"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="submit">
                <button className="submit-1" onClick={this.handleSubmit}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.listProductsDetailReducer.productById
  };
};

export default connect(
  mapStateToProps,
  { getProductDetail }
)(withRouter(ProductDetail));
