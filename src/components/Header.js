import React, { Component } from "react";
import { Link } from "react-router-dom";
import White from "../assets/designs/white.svg";

import "../assets/scss/Header.scss";

class Header extends Component {
  state = {
    // Menggunakan false conditional state di Header tidak dapat berubah namun false merubah ke duanya antara homepage dan detail
    withMenu: true
  };
  render() {
    return (
      <div className="head-1">
        <div
          className={
            this.props.backColorHeaderPage ? "header--dark" : "header--light"
          }
        >
          <nav>
            <div className="h-logo">
              <h1>MINISHOP</h1>
            </div>
            <ul className="nav-links">
              <Link to="#">
                <li>Women</li>
              </Link>
              <Link to="#">
                <li>Men</li>
              </Link>
              <Link to="#">
                <li>Kids</li>
              </Link>
              <Link to="#">
                <li>Shoes</li>
              </Link>
              <Link to="#">
                <li>Brands</li>
              </Link>
            </ul>
            <form className="finding">
              <label htmlFor="search-box">
                <span className="fa fa-search fa-flip-horizontal fa-2x icon-search"></span>
              </label>
              <input
                type="search"
                placeholder="search anything"
                className="box-search"
              />
              <div className="nav-2">
                <img src={White} alt="shopping-cart" width="25px" />
                <div className="cart-btn">
                  <span className="nav-icon"></span>
                  <div className="cart-items">0</div>
                </div>
              </div>
            </form>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
