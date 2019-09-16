import React, { Component } from "react";
import "../assets/scss/SignupComponent.scss";

class SignupComponent extends Component {
  render() {
    return (
      <div className="signup-page">
        <div className="form">
          <h1>Sign Up</h1>
          <form className="signup-form">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign up</button>

            <p class="message">
              Already member? <a href="/">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupComponent;
