import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../store/actions/authAction";
import propTypes from "prop-types";

import "../assets/scss/SignupComponent.scss";

class SignupComponent extends Component {
  state = {
    username: "",
    name: "",
    email: "",
    password: "",
    role: "customer"
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };

    this.props.register(formData);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="signup-page">
        <div className="form">
          <h1>Sign Up</h1>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="your name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <button>Sign up</button>
          </form>

          <p class="message">
            Already member? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    );
  }
}

SignupComponent.propTypes = {
  register: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { register }
)(SignupComponent);
