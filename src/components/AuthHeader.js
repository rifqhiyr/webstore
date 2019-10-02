import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../store/actions/authAction";

import Indonesia from "../assets/designs/indonesia.svg";
import ShoppingCart from "../assets/designs/shopping-cart.svg";

import "../assets/scss/AuthHeader.scss";

class AuthHeader extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.logout();
    alert("See you :)");
    this.props.history.push("/");
  };

  navbarLinks() {
    if (this.props.isAuthenticated) {
      return [
        <div className="nav-1">
          <li>
            <Link to="/" onClick={this.handleSubmit}>
              <span>Sign out</span>
            </Link>
          </li>
        </div>
      ];
    }
    return [
      <div className="nav-1">
        <li>
          Hi!{" "}
          <Link to="/login">
            <span>Sign In</span>
          </Link>
        </li>
        <li>
          or{" "}
          <Link to="/register">
            <span>Sign up</span>
          </Link>
        </li>
      </div>
    ];
  }
  render() {
    return (
      <div className="container">
        <div
          className={
            this.props.backColorHeader
              ? "authHeader--dark"
              : "authHeader--light"
          }
        >
          <nav>
            {this.navbarLinks()}
            <ul className="nav-li">
              <Link to="#">
                <li>Daily Deals</li>
              </Link>
              <Link to="#">
                <li>Sell</li>
              </Link>
              <Link to="#">
                <li>Help & Contact</li>
              </Link>
            </ul>
            <div className="nav-2">
              <li>
                <img src={Indonesia} alt="Indonesia" width="25px" /> &#82;&#112;
                IDR
              </li>
              <img src={ShoppingCart} alt="shopping-cart" width="25px" />
              <div className="cart-btn">
                <span className="nav-icon"></span>
                <div className="cart-items">0</div>
              </div>
              <li>Your bag : &#82;&#112;9999.99 </li>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(withRouter(AuthHeader));

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Indonesia from "../assets/designs/indonesia.svg";
// import ShoppingCart from "../assets/designs/shopping-cart.svg";

// // Import Style (Delete in this in production)
// import "../assets/scss/AuthHeader.scss";

// class AuthHeader extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div
//           className={
//             this.props.backColorHeader
//               ? "authHeader--dark"
//               : "authHeader--light"
//           }
//         >
//           <nav>
//             <div className="nav-1">
//               <li>
//                 Hi!{" "}
//                 <Link to="/login">
//                   <span>Sign In</span>
//                 </Link>
//               </li>
//               <li>
//                 or{" "}
//                 <Link to="/register">
//                   <span>Register</span>
//                 </Link>
//               </li>
//             </div>
//             <ul className="nav-li">
//               <Link to="#">
//                 <li>Daily Deals</li>
//               </Link>
//               <Link to="#">
//                 <li>Sell</li>
//               </Link>
//               <Link to="#">
//                 <li>Help & Contact</li>
//               </Link>
//             </ul>
//             <div className="nav-2">
//               <li>
//                 <img src={Indonesia} alt="Indonesia" width="25px" /> &#82;&#112;
//                 IDR
//               </li>
//               <img src={ShoppingCart} alt="shopping-cart" width="25px" />
//               <div className="cart-btn">
//                 <span className="nav-icon"></span>
//                 <div className="cart-items">0</div>
//               </div>
//               <li>Your bag : &#82;&#112;9999.99 </li>
//             </div>
//           </nav>
//         </div>
//       </div>
//     );
//   }
// }

// export default AuthHeader;
