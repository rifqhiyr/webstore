import React, { Component } from "react";
import SignupComponent from "../SignupComponent";
import AuthHeader from "../AuthHeader";
import Header from "../Header";
import Footer from "../Footer";

export default class RegisterPage extends Component {
  render() {
    return (
      <div>
        <AuthHeader />
        <Header />
        <SignupComponent />
        <Footer />
      </div>
    );
  }
}
