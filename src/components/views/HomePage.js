import React, { Component } from "react";
import Footer from "../Footer";

// Import Components {Dont forget delete in production}
import AuthHeader from "../AuthHeader";
import Header from "../Header";
import Jumbotron from "../Jumbotron";
import Card from "../Card";
import HotProduct from "../HotProduct";
import Hero from "../Hero";

export default class HomePage extends Component {
  state = {
    backColorHeader: true,
    backColorHeaderPage: true,
    backColorFooter: true
  };
  render() {
    return (
      <div>
        <AuthHeader backColorFooter={this.state.backColorHeader} />
        <Header backColorHeaderPage={this.state.backColorHeaderPage} />
        <Jumbotron />
        <Card />
        <HotProduct />
        <Hero />
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}
