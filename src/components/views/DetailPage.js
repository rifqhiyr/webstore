import React, { Component } from "react";
import Footer from "../Footer";

// Import component
import AuthHeader from "../../components/homepage/AuthHeader.js"
import Header from "../../components/homepage/Header"

class DetailPage extends Component {
  state = {
    backColorHeader : false,
    backColorHeaderPage : false,
    backColorFooter: false
  }
  render() {
    return (
      <div>
        <h1>detail page</h1>
        <AuthHeader backColorHeader={this.state.backColorHeader}/>
        <Header backColorHeaderPage={this.state.backColorHeaderPage}/>
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}


export default DetailPage





