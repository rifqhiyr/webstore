import React, { Component } from "react";
import "../assets/scss/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className={this.props.backColorFooter?"footer--dark":"footer--light"}>
          <ul className="footer--link">
            <li><a href="">Women</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Kids</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Brand</a></li>
          </ul>
          <ul className="footer--link__socmed">
            <li><a href=""><i class="fa fab fa-instagram"></i></a></li>
            <li><a href=""><i class="fa fab fa-pinterest"></i></a></li>
            <li><a href=""><i class="fa fab fa-twitter"></i></a></li>
            <li><a href=""><i class="fa fab fa-facebook"></i></a></li>
          </ul>
          <p className="footer--copyright">
            <small>
            &copy;2016 Shopmate Ltd
            </small>
            <small>
              • Contact
            </small>
            <small>
              • Privacy policy
            </small>
          </p>
        </div>
      </div>
    )
  }
}

export default Footer;
