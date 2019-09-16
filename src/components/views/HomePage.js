import React, { Component } from "react";
import Footer from "../Footer"

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
