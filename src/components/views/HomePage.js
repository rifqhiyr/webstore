import React, { Component } from "react";

// Import Components {Dont forget delete in production}
import AuthHeader from "../homepage/AuthHeader"
import Header from "../homepage/Header"

export default class HomePage extends Component {
  state = {
    backColorHeader : true,
    backColorHeaderPage : true
  }
  render() {
    return (
      <div>
        <AuthHeader backColorHeader={this.state.backColorHeader}/>
        <Header backColorHeaderPage={this.state.backColorHeaderPage}/>
      </div>
    );
  }
}


