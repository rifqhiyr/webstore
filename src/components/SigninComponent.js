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

  handleSubmit = async e => {
    e.preventDefault();
    // console.log(this.props.history);

    const formData = {
      username: this.state.username,
      password: this.state.password
    };

    await this.props.login(formData);
    if (this.props.isAuthenticated) {
      console.log("welcome", this.props.isAuthenticated);
      this.props.history.push("/");
    } else {
      console.log(this.props.isAuthenticated);
      alert("Error username or password");
    }
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
            <button>Sign In</button>
          </form>
          <p className="message">
            <Link to="/register">Sign Up here..</Link>
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
