import React, { Component } from "react";
import M from "materialize-css";

class Faq extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      M.Collapsible.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">filter_drama</i>First
            </div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">place</i>Second
            </div>
            <div className="collapsible-body"></div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">whatshot</i>Third
            </div>
            <div className="collapsible-body">
              <span>TO DO</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Faq;
