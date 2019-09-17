import React, { Component } from "react";
import AuthHeader from "../AuthHeader";
import Header from "../Header";
import ConfirmationPage from "../ConfirmationPage";
import CheckoutForm from "../CheckoutForm";
import PaymentPage from "../PaymentPage";
import Footer from "../Footer";

export default class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <AuthHeader />
        <Header />
        <CheckoutForm />
        <ConfirmationPage />
        <PaymentPage />
        <Footer />
      </div>
    );
  }
}
