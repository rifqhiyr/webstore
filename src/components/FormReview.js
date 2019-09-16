import React, { Component } from "react";
import "../assets/scss/FormReview.scss";

export default class FormReview extends Component {
  render() {
    return (
      <div>
        <h2 className="pad">Add a review</h2>
        <div className="container">
          <form>
            <div className="row">
              <div className="col-25">
                <label>Choose a nickname</label>
              </div>
              <div className="col-75">
                <input type="text" name="nickname" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Your Review</label>
              </div>
              <div className="col-75">
                <textarea
                  name="review"
                  style={{ height: "200px" }}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Overall rating</label>
              </div>
              <div className="col-75">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div className="row">
              <div className="col-25"></div>
              <div className="col-75">
                <button className="button">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
