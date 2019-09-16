import React, { Component } from 'react'

// Import Component
import AuthHeader from "../components/AuthHeader"
import Header from "../components/Header"

export class Homepage extends Component {
  render() {
    return (
      <div>
        <AuthHeader {...this.props}/>
        <Header {...this.props}/>
      </div>
    )
  }
}

export default Homepage
