import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import style (delete this in production)
import "../assets/scss/Jumbotron.scss";

class Jumbotron extends Component {
  render() {
    return (
      <div className="j-container">
        <h1>Men's Wear</h1>
        <div className="j-grid">
          <div className="j-grid1">
            <ul>
              <Link to="#">
                <li>Accesories</li>
              </Link>
              <Link to="#">
                <li>ASOS Basic Tops</li>
              </Link>
              <Link to="#">
                <li>Bags</li>
              </Link>
              <Link to="#">
                <li>Bags & Hats</li>
              </Link>
              <Link to="#">
                <li>Gifts</li>
              </Link>
              <Link to="#">
                <li>Grooming</li>
              </Link>
            </ul>
          </div>
          <div className="j-grid2">
            <ul>
              <Link to="#">
                <li>Hoodie & Sweatshirts</li>
              </Link>
              <Link to="#">
                <li>Jackets & Coats</li>
              </Link>
              <Link to="#">
                <li>Jeans</li>
              </Link>
              <Link to="#">
                <li>Jewllery</li>
              </Link>
              <Link to="#">
                <li>Joggers</li>
              </Link>
              <Link to="#">
                <li>Jumpers & Cardigans</li>
              </Link>
            </ul>
          </div>
          <div className="j-grid3">
            <ul>
              <Link to="#">
                <li>Leather Jackets</li>
              </Link>
              <Link to="#">
                <li>Long Sleeve T-Shirts</li>
              </Link>
              <Link to="#">
                <li>Loungewear</li>
              </Link>
              <Link to="#">
                <li>Oversized & Longline</li>
              </Link>
              <Link to="#">
                <li>Polo Shirts</li>
              </Link>
              <Link to="#">
                <li>Shirts</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
