import React, { Component } from "react";

// Import Components {Dont forget delete in production}
import AuthHeader from "../AuthHeader";
import Header from "../Header";
import Jumbotron from "../Jumbotron";
import CardSidebar from "../CardSidebar";
import Card from "../Card";
import Hero from "../Hero";
import FormSubcribtion from "../FormSubcribtion";
import Footer from "../Footer";

import DataHot from "./../../assets/data/HotData";

export default class HomePage extends Component {
  state = {
    backColorHeader: true,
    backColorHeaderPage: true,
    backColorFooter: true
  };
  render() {
    const dataList = DataHot.map(data => {
      return (
        <div className="content">
          <img src={data.img} alt="Product1" />
          <div className="h5">{data.title}</div>
          <div className="price">Rp {data.price} ,00</div>
          <div className="button-wrap">
            <button className="button-hot">Buy now</button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <AuthHeader backColorFooter={this.state.backColorHeader}/>
        <Header backColorHeaderPage={this.state.backColorHeaderPage}/>
        <Jumbotron />
        <CardSidebar />
        <Card />
        <div className="padding">
          <div className="wrap margin-top">{dataList}</div>
        </div>
        <Hero />
        <FormSubcribtion />
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}
