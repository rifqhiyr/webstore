import React, { Component } from "react";

import AuthHeader from "../AuthHeader";
import Header from "../Header";
import Jumbotron from "../Jumbotron";
import CardSidebar from "../CardSidebar";
import Card from "../Card";
import Hero from "../Hero";
import FormSubcribtion from "../FormSubcribtion";
import Footer from "../Footer";

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
        <CardSidebar />
        <Card />
        <Hero />
        <FormSubcribtion />
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}
