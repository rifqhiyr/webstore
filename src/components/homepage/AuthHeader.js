import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Indonesia from "../../assets/designs/indonesia.svg"
import ShoppingCart from "../../assets/designs/shopping-cart.svg"


class AuthHeader extends Component {
  render() {
    return (
      <div className="container">
        <nav className="nav-link">
          <ul>
            <li>Hi! <span>Sign In</span></li>
            <li>or <span>Register</span></li>
            <li>Daily Deals</li>
            <li>Sell</li>
            <li>Help & Contact</li>
            <li><img src={Indonesia} alt="Indonesia" width="25px"/> &#82;&#112; IDR</li>
            <li><img src={ShoppingCart} alt="shopping-cart" width="25px"/>0</li>
            <li>Your bag : &#82;&#112;9999.99 </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default AuthHeader
