import React, { Component } from "react";
import ProductReview from "./../ProductReview";
import FormReview from "../FormReview";
import HotProduct from "../HotProduct";

export default class DetailPage extends Component {
  state = {
    backColorFooter: false
  };
  render() {
    return (
      <div>
        <ProductReview />
        <FormReview />
        <HotProduct />
      </div>
    );
  }
}
