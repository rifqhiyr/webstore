import React, { Component } from "react";
import AuthHeader from "../AuthHeader";
import Header from "../Header";
import CardContainer from "../CardContainer";

import Footer from "../Footer";

export default class CartPage extends Component {
  render() {
    return (
      <div>
        <AuthHeader />
        <Header />
        <CardContainer />
        <Footer />
      </div>
    );
  }
}
