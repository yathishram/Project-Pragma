import React from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";

const History = ({ transactions, history }) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Recent History</span>
        {transactions &&
          transactions
            .filter((transaction, idx) => idx < 1)
            .map((transaction) => {
              return (
                <div key={transaction.id}>
                  <p>IPFS HASH : {transaction.ifpsHash}</p>
                  <p>Transaction Hash: {transaction.transactionhash}</p>
                  <p className="grey-text">{moment(transaction.createdAt.toDate()).calendar()}</p>
                </div>
              );
            })}
      </div>
      <div className="card-action">
        <span onClick={() => history.push("/history")}>Click here for complete History</span>
      </div>
    </div>
  );
};

export default withRouter(History);
