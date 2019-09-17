import React, { Component } from "react";

// Import style (delete this in production)
import "../assets/scss/Jumbotron.scss";

class Jumbotron extends Component {
  render() {
    return (
      <div className="j-container">
        <h1>Men's Wear</h1>
        <div className="j-grid">
          <div class="j-grid1">
            <ul>
              <li>Accesories</li>
              <li>ASOS Basic Tops</li>
              <li>Bags</li>
              <li>Bags & Hats</li>
              <li>Gifts</li>
              <li>Grooming</li>
            </ul>
          </div>
          <div class="j-grid2">
            <ul>
              <li>Hoodie & Sweatshirts</li>
              <li>Jackets & Coats </li>
              <li>Jeans</li>
              <li>Jewllery</li>
              <li>Joggers</li>
              <li>Jumpers & Cardigans</li>
            </ul>
          </div>
          <div class="j-grid3">
            <ul>
              <li>Leather Jackets</li>
              <li>Long Sleeve T-Shirts</li>
              <li>Loungewear</li>
              <li>Oversized & Longline</li>
              <li>Polo Shirts</li>
              <li>Shirts</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
