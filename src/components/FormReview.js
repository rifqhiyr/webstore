import React, { Component } from "react";
import "../assets/scss/FormReview.scss";

export default class FormReview extends Component {
  render() {
    return (
      <div className="padding">
        <h2>Add a review</h2>
        <div className="margin-top">
          <form>
            <div className="row-1">
              <div className="col-30">
                <label>Choose a nickname</label>
              </div>
              <div className="col-70">
                <input type="text" className="input" name="nickname" />
              </div>
            </div>
            <div className="row-1 margin-top-20">
              <div className="col-30">
                <label>Your Review</label>
              </div>
              <div className="col-70">
                <textarea
                  name="review"
                  defaultValue={""}
                  className="text-area"
                />
                <p className="smallFont">
                  Your review must be at least 50 characters
                </p>
              </div>
            </div>
            <div className="row-1 margin-top-20">
              <div className="col-30">
                <label>Overall rating</label>
              </div>
              <div className="col-70">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div className="row-1 margin-top-20">
              <div className="col-30"></div>
              <div className="col-70">
                <button className="button">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
