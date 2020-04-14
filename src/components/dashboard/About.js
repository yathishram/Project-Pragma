import React, { Component } from "react";
import AboutLogo from "../../media/aboutpage.svg";
import SecureLogo from "../../media/insurance.png";
import IdentityLogo from "../../media/identity.png";
import Sharelogo from "../../media/team.png";

class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s4 pull-s2 ">
            <img src={AboutLogo} alt="" style={{ height: 350, width: 450 }} />
          </div>
          <div className="col s8">
            <div className="section">
              <h3 style={{ color: "#ff4156" }}>Why Pragma?</h3>
              <h5>How are we Different?</h5>
              <hr />
              <h5 style={{ color: "dark-blue" }}>Data Breach, Data Leak, Idenity Misuse and Theft....</h5>
              <p>
                Sounds familiar and scary, stopping you from sharing files online? Here we’re with a solution! We use BLOCKCHAIN to safeguard your data as well
                as identity. Yes, you heard it right, we give YOU the complete right over YOUR DATA!
              </p>
              <div className="row">
                <div className="col s4 5 center-align">
                  <img src={SecureLogo} alt="" />
                  <h5>Secure</h5>
                </div>
                <div className="col s4  5 center-align">
                  <img src={IdentityLogo} alt="" />
                  <h5>Identity</h5>
                </div>
                <div className="col s4  5 center-align">
                  <img src={Sharelogo} alt="" />
                  <h5>Share</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
