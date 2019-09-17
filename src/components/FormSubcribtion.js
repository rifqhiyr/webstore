import React, { Component } from "react";
import "../assets/scss/FormSubcribtion.scss";

class FormSubcribtion extends Component {
  render() {
    return (
      <div className="sub-container">
        <div className="sub-title">
          <h1 className="heading">
            SUBCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFERS{" "}
          </h1>
          <div className="sub-content">
            <input
              className="sub-input"
              type="email"
              placeholder="Your e-mail here"
            />
            <button className="sub-btn">subcribe</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormSubcribtion;
