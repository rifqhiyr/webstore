import React, { Component } from "react";
import ProductReview from "./../ProductReview";
import FormReview from "../FormReview";
import HotProduct from "../HotProduct";
import Footer from "../Footer";
import AuthHeader from "../../components/AuthHeader.js";
import Header from "../../components/Header";

class DetailPage extends Component {
  state = {
    backColorHeader: false,
    backColorHeaderPage: false,
    backColorFooter: false
  };
  render() {
    return (
      <div>
        <AuthHeader backColorHeader={this.state.backColorHeader} />
        <Header backColorHeaderPage={this.state.backColorHeaderPage} />
        <ProductReview />
        <FormReview />
        <HotProduct />
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}

export default DetailPage;
