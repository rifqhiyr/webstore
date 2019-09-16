import React, { Component } from "react";

// Import Components {Dont forget delete in production}
import AuthHeader from "../homepage/AuthHeader"
import Header from "../homepage/Header"

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <AuthHeader/>
        <Header/>
      </div>
    );
  }
}
