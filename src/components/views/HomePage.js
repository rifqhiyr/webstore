import React, { Component } from "react";
import Footer from "../Footer"


// Import Components {Dont forget delete in production}
import AuthHeader from "../homepage/AuthHeader"
import Header from "../homepage/Header"
import Jumbotron from "../homepage/Jumbotron"

export default class HomePage extends Component {
  state = {
    backColorHeader : true,
    backColorHeaderPage: true,
    backColorFooter: true,
    
  }
  render() {
    return (
      <div>
        <h1>header</h1>
        <AuthHeader backColorFooter={this.state.backColorHeader}/>
        <Header backColorHeaderPage={this.state.backColorHeaderPage}/>
        <Jumbotron/>
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}


