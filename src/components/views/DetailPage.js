import React, { Component } from "react";

// Import component (delete this in production)
import AuthHeader from "../../components/homepage/AuthHeader.js" 

// Import Style (Delete in this in production)
import "../../assets/scss/stylehomepage/AuthHeader.css"

class DetailPage extends Component {
  state = {
    backColorHeader : false
  }
  render() {
    return (
      <div>
        <AuthHeader backColorHeader={this.state.backColorHeader}/>
      </div>
    );
  }
}


export default DetailPage


