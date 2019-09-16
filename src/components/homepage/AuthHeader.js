import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Indonesia from "../../assets/designs/indonesia.svg"
import ShoppingCart from "../../assets/designs/shopping-cart.svg"

// Import Style (Delete in this in production)
import "../../assets/scss/stylehomepage/AuthHeader.css"


class AuthHeader extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <div className="nav-1">
            <li>Hi!  <Link to = "#"><span>Sign In</span></Link></li>
            <li>or <Link to="#"><span>Register</span></Link></li>
          </div>
          <ul className="nav-li">
            <Link to="#">
            <li>Daily Deals</li>
            </Link>
            <Link to="#">
            <li>Sell</li>
            </Link>
            <Link to ="#">
            <li>Help & Contact</li>
            </Link>
          </ul>
          <div className="nav-2">
            <li><img src={Indonesia} alt="Indonesia" width="25px"/> &#82;&#112; IDR</li>
            <img src={ShoppingCart} alt="shopping-cart" width="25px"/>
            <div className="cart-btn">
                <span className="nav-icon">
                </span>
                <div className="cart-items">0</div>
            </div>
            <li>Your bag : &#82;&#112;9999.99 </li>
            </div>
        </nav>
      </div>
    )
  }
}

export default AuthHeader
