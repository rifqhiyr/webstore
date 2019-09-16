import React, { Component } from "react";
import "../assets/scss/SigninComponent.scss";

class SigninComponent extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <h1>sign in</h1>
          <form className="login-form">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <p>
              <input type="checkbox" /> Remember
            </p>

            <button>Sign in</button>
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
