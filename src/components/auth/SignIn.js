import React, { Component } from "react";
import { connect } from "react-redux";
import { signin } from "../../actions/authActions";
import { Redirect } from "react-router-dom";

import LoginLogo from "../../media/login.svg";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signin(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/fun"></Redirect>;
    return (
      <div className="container">
        <h3 className="center-align" style={{ color: "#ff4156" }}>
          WELCOME BACK,
        </h3>
        <h5 className="center-align">Login to Continue</h5>

        <div className="row">
          <div className="col l6">
            <img alt="" src={LoginLogo} style={{ height: 340, width: 580 }} />
          </div>
          <div className="col l6">
            <form className="white" onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn pink z-depth-1">Login</button>
                <div className="center red-text">{authError ? <p>{authError}</p> : null}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (creds) => dispatch(signin(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
