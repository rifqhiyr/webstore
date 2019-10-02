import React, { Component } from "react";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";

import { showCart, deleteCart } from "../store/actions/listProductsAction";

class CartList extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.showCart();
    // setInterval(this.props.showCart(), 1000);
  }

  handleDelete = async id => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    console.log(id);
    await this.props.deleteCart(id);
    this.props.showCart();
  };

  // componentDidUpdate() {
  //   if (localStorage.token) {
  //     setToken(localStorage.token);
  //   }
  //   this.props.showCart();
  // }

  render() {
    // console.log(this.props.showCart());
    const cartList =
      this.props.cartProducts &&
      this.props.cartProducts.map(product => {
        console.log(product);
        return (
          <div className="table-body row">
            <div className="col-4">
              <div className="col-12 row">
                {/* <div className="col-3 product-image">
              <img src={require("../assets/images/afghan-flower.gif")} alt="" />
            </div> */}
                <div className="col-12">
                  <h4 style={{ marginTop: "0" }}>
                    {product.product_id.productName}
                  </h4>
                  <span className="small">
                    <i
                      className="fa fa-close red"
                      onClick={() => this.handleDelete(product._id)}
                    ></i>
                    &nbsp; Remove
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
                {/* <button className="circle-button">
                  <i className="fa fa-minus"></i>
                </button> */}
                <input
                  type="text"
                  className="round-input"
                  value={product.quantity}
                />
                {/* <button className="circle-button">
                  <i className="fa fa-plus"></i>
                </button> */}
              </div>
            </div>
            <div className="col-3">
              <h3 style={{ marginTop: "0" }}>Rp {product.total},00</h3>
            </div>
          </div>
        );
      });

    return (
      <div>
        <div>{cartList}</div>
        <div
          className="table-body row"
          style={{ borderTop: "2px solid #ddd", paddingTop: "10px" }}
        >
          <div className="col-4"></div>
          <div className="col-1">
            <div className="col-4 center">
              {/* <p style={{ marginTop: "0" }}>XX</p>
              <p>L</p> */}
            </div>
          </div>
          <div className="col-4 row justify-content-center">
            <div className="quantity-form">
              <h4>TOTAL</h4>
              {/* <button className="circle-button">
                <i className="fa fa-minus"></i>
              </button>
              <input
                type="text"
                className="round-input"
                name=""
                id=""
                value={product.quantity}
              />
              <button className="circle-button">
                <i className="fa fa-plus"></i>
              </button> */}
            </div>
          </div>
          <div className="col-3">
            <h3 style={{ marginTop: "0" }}>Rp {this.props.allTotal},00</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.cartReducer.cartProducts);
  return {
    cartProducts: state.cartReducer.cartProducts,
    allTotal: state.cartReducer.allTotal
  };
};

export default connect(
  mapStateToProps,
  { showCart, deleteCart }
)(CartList);
