import React, { Component } from "react";
import "../assets/scss/SigninComponent.scss";

class SigninComponent extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <h1>Sign In</h1>
          <form className="login-form">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <div className="check">
              <input type="checkbox" /> Remember me
            </div>

            <button>Sign In</button>
            <p className="message">
              <a href="/">forgot password</a>
              <a href="/">Have an account</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SigninComponent;
