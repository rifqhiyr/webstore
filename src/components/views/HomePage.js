import React, { Component } from "react";
import Footer from "../Footer"
import CardSidebar from "../CardSidebar";

export default class HomePage extends Component {
  state = {
    backColorFooter: true
  }
  render() {
    return (
      <div>
        <h1>header</h1>
        <CardSidebar />
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}
