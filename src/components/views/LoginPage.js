import React, { Component } from "react";
import SigninComponent from "../SigninComponent";
import AuthHeader from "../AuthHeader";
import Header from "../Header";
import Footer from "../Footer";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <AuthHeader />
        <Header />
        <SigninComponent />
        <Footer />
      </div>
    );
  }
}
