import React from "react";
import Homeimage from "../../media/home.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Home = props => {
  const { auth } = props;
  if (auth.uid) {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s6">
              <img src={Homeimage} alt="" style={{ height: 350, width: 450 }} />
            </div>
            <div className="col s6">
              <div className="section">
                <h3 style={{ color: "#ff4156" }}>Start Sharing Files</h3>
                <h5>SAFE - SECURE - FREE</h5>
                <NavLink to="/dashboard" className="btn pink">
                  SHARE NOW!
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s6">
              <img src={Homeimage} alt="" style={{ height: 350, width: 450 }} />
            </div>
            <div className="col s6">
              <div className="section">
                <h3 style={{ color: "#ff4156" }}>SHARING FILES MADE SECURE</h3>

                <h5>Share without data breech and identity theft</h5>
                <NavLink to="/signup" className="btn pink">
                  JOIN US!
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Home);
