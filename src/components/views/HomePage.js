import React, { Component } from "react";
import Footer from "../Footer"

// Import Components {Dont forget delete in production}
import AuthHeader from "../homepage/AuthHeader"
import Header from "../homepage/Header"

export default class HomePage extends Component {
  state = {
    backColorFooter: true
  }
  render() {
    return (
      <div>
        <h1>header</h1>
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}


