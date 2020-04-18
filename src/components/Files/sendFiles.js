import React, { Component } from "react";
import { connect } from "react-redux";
import { createTransactionEntry } from "../../actions/transactionAction";

import web3 from "../../actions/web3";
import ipfs from "../../actions/ipfs";
import storeHash from "../../actions/contract";

class Send extends Component {
  state = {
    ipfsHash: null,
    buffer: "",
    ethAddress: "",
    transactionHash: "",
    txReceipt: "",
  };

  captureFile = (e) => {
    //e.stopPropagation()
    e.preventDefault();
    const file = e.target.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader);
  };

  convertToBuffer = async (reader) => {
    const buffer = await Buffer.from(reader.result);
    this.setState({
      buffer: buffer,
    });
  };

  // onClick = async () => {
  //   try {
  //     this.setState({
  //       blockNumber: "Waiting",
  //     });
  //     this.setState({ gasUsed: "Waiting" });

  //     await web3.eth.getTransactionReceipt(this.setState.transactionHash, (err, txReceipt) => {
  //       console.log(err, txReceipt);
  //       this.setState({
  //         txReceipt: txReceipt,
  //       });
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  onSubmit = async (event) => {
    event.preventDefault();
    //Clear the data
    this.setState({
      ipfsHash: "",
      transactionHash: "",
    });

    const accounts = await web3.eth.getAccounts();
    const ethAddress = await storeHash.options.address;
    this.setState({ ethAddress });
    try {
      await ipfs.add(this.state.buffer, (err, ipfsHash) => {
        //console.log(ipfsHash);
        this.setState({
          ipfsHash: ipfsHash[0].hash,
        });
        storeHash.methods.setHash(this.state.ipfsHash).send(
          {
            from: accounts[0],
          },
          (error, transactionHash) => {
            this.setState({ transactionHash: transactionHash });
            //console.log(this.state.ipfsHash, this.state.transactionHash);
            try {
              this.props.createTransactionEntry(this.state.ipfsHash, this.state.transactionHash);
            } catch (err) {
              console.log("Couldnt update the db", err.message);
            }
          }
        );
        //Call firebase from here.
        //
      });
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card medium blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">SEND</span>
            <form onSubmit={this.onSubmit}>
              <div className="file-field input-field">
                <div className="btn-floating waves-effect waves-light red">
                  <i className="material-icons">add</i>
                  <input type="file" onChange={this.captureFile} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
                <button className="btn waves-effect waves-light">
                  Send
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
          <div className="card-action white-text">
            <h5>Share the Hash</h5>
            <h6>File Hash</h6>
            <span>{this.state.ipfsHash}</span>
            <h6>Transaction Hash</h6>
            <span>{this.state.transactionHash}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTransactionEntry: (ipfshash, transactionhash) => dispatch(createTransactionEntry(ipfshash, transactionhash)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Send);
