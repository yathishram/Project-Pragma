import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../actions/authActions";

const SignedInLinks = (props) => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/fun" className="grey-text text-darken-4">
          Share
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="grey-text text-darken-4">
          Dashboard
        </NavLink>
      </li>
      <li>
        <a href="/" onClick={props.signout} className="grey-text text-darken-4">
          Log Out
        </a>
      </li>

      <li>
        <NavLink to="/dashboard" className="btn btn-floating grey">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
