import React, { Component } from 'react'
import {Link} from "react-router-dom" 
import "../../assets/scss/stylehomepage/Hero.css"

class Hero extends Component {
  render() {
    return (
      <div className="h-container">
        <div className="h-color">
        <h1>Sneakers</h1>
        <p>Explore styles tough enough to handle all your workouts</p>
        <div className="h-link">
        <Link to="#">
          <p>Shop Brand</p>
        </Link>
        </div>
        </div>
      </div>
    )
  }
}

export default Hero
