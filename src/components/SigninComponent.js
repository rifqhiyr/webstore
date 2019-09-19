import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../store/actions/authAction";

import "../assets/scss/SigninComponent.scss";

class SigninComponent extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.history);

    const formData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(formData);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <h1>Sign In</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div className="check">
              <input type="checkbox" /> Remember me
            </div>

            <button>Sign In</button>
          </form>
          <p className="message">
            <Link to="#">forgot password</Link>
            {/* <Link to="/">Have an account</Link> */}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { login }
)(withRouter(SigninComponent));
