import React, { Component } from "react";

// Import component (delete this in production)
import AuthHeader from "../../components/homepage/AuthHeader.js" 
import Header from "../../components/homepage/Header.js"

// Import Style (Delete in this in production)
import "../../assets/scss/stylehomepage/AuthHeader.css"
import "../../assets/scss/stylehomepage/Header.css"

class DetailPage extends Component {
  state = {
    backColorHeader : false,
    backColorHeaderPage : false
  }
  render() {
    return (
      <div>
        <AuthHeader backColorHeader={this.state.backColorHeader}/>
        <Header/>
      </div>
    );
  }
}


export default DetailPage





