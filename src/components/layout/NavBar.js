import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignInLinks";
import SignedOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const NavBar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <nav className="transparent z-depth-0">
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo grey-text text-darken-4">
            Pragma
          </Link>
          {links}
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(NavBar);
