import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/about" className="grey-text text-darken-4">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" className="grey-text text-darken-4">
          SignIn
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className="grey-text text-darken-4">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
