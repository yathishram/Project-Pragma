import React, { Component } from "react";
// import axios from "axios";

// import web3 from "../../actions/web3";
// import ipfs from "../../actions/ipfs";
// import storeHash from "../../actions/contract";

class Receive extends Component {
  state = {
    hash: null,
  };

  handleChange = (e) => {
    e.preventDefault();
    const hash = e.target.value;
    this.setState({
      hash: hash,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.hash);
    let hash = this.state.hash;
    console.log(`https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`);
    window.open(`https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`, "_blank");
  };

  render() {
    return (
      <div className="container">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">RECEIVE</span>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <label htmlFor="hash">File Hash</label>
                <input id="hash" type="text" onChange={this.handleChange} />
                <button className="btn waves-effect waves-light">
                  Done
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Receive;
