import React, { Component } from "react";
<<<<<<< HEAD
import Footer from "../Footer";

// Import Components {Dont forget delete in production}
import AuthHeader from "../AuthHeader";
import Header from "../Header";
import Jumbotron from "../Jumbotron";
import Card from "../Card";
import Hero from "../Hero";
=======
import Footer from "../Footer"
import CardSidebar from "../CardSidebar";
>>>>>>> 55b9820ec6b0b768f7e25a6b1c32f00f3629a4ae

export default class HomePage extends Component {
  state = {
    backColorHeader: true,
    backColorHeaderPage: true,
    backColorFooter: true
  };
  render() {
    return (
      <div>
<<<<<<< HEAD
        <AuthHeader backColorFooter={this.state.backColorHeader} />
        <Header backColorHeaderPage={this.state.backColorHeaderPage} />
        <Jumbotron />
        <Card />
        <Hero />
=======
        <h1>header</h1>
        <CardSidebar />
>>>>>>> 55b9820ec6b0b768f7e25a6b1c32f00f3629a4ae
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}
