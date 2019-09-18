import React, { Component } from "react";

import "../assets/scss/Card.scss";

// Import image {delete this in production}
import Images1 from "../assets/images/adoration-of-the-kings.gif";
import Images2 from "../assets/images/albania-flower.gif";
import Images3 from "../assets/images/afghan-flower.gif";

class Card extends Component {
  render() {
    return (
      <div className="c-grid c-hover">
        <div class="card-1">
          <div>
          <h4>HOT</h4>
          </div>
          <img src={Images1} alt="images1" />
          <h3>Jhon Doe Clothes</h3>
          <h4>&#82;&#112;39.999,00</h4>
        </div>
        <div class="card-2">
          <div>
          <h4>HOT</h4>
          </div>
          <img src={Images2} alt="images2" />
          <h3>Jane Doe Clothes</h3>
          <h4>&#82;&#112;49.999,00</h4>
        </div>
        <div class="card-3">
          <div>
          <h4>HOT</h4>
          </div>
          <img src={Images3} alt="images3" />
          <h3>Jhon Doe Clothes Lorem Ipsum</h3>
          <h4>&#82;&#112;79.999,00</h4>
        </div>
      </div>
    );
  }
}

export default Card;
