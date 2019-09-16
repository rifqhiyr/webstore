import React, { Component } from "react";
<<<<<<< HEAD
import Footer from "../Footer";
=======
import ProductReview from "./../ProductReview";
import FormReview from "../FormReview";
import HotProduct from "../HotProduct";
>>>>>>> d761cbd68fce560e09faa0fbe1fdfeb8a649dee1

export default class DetailPage extends Component {
  state = {
    backColorFooter: false
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>detail page</h1>
        <Footer backColorFooter={this.state.backColorFooter} />
=======
        <ProductReview />
        <FormReview />
        <HotProduct />
>>>>>>> d761cbd68fce560e09faa0fbe1fdfeb8a649dee1
      </div>
    );
  }
}
