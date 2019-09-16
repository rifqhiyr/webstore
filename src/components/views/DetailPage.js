import React, { Component } from "react";
import Footer from "../Footer";

class DetailPage extends Component {
  state = {
    backColorFooter: false
  }
  render() {
    return (
      <div>
        <h1>detail page</h1>
        <Footer backColorFooter={this.state.backColorFooter} />
      </div>
    );
  }
}


export default DetailPage





