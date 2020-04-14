import React, { Component } from "react";
import { Link } from "react-router-dom";
import Send from "../Files/sendFiles";
import Instructions from "../Files/instructions";
import Receive from "../Files/recieveFiles";

class FileActionPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="send section">
          <div className="row">
            <div className="col s8 pull-s3">
              <Send />
              <Receive />
            </div>
            <Link to="/faq">
              <div className="col s4 push-s2">
                <Instructions />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FileActionPage;
