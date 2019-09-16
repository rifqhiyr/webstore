import React, { Component } from "react";
import ProductReview from "./../ProductReview";
import FormReview from "../FormReview";

export default class DetailPage extends Component {
  render() {
    return (
      <div>
        <ProductReview />
        <FormReview />
      </div>
    );
  }
}
