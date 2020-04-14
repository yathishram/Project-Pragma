import React from "react";
import moment from "moment";

const History = ({ transactions }) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Recent History</span>
        {transactions &&
          transactions.map((transaction) => {
            return (
              <div key={transaction.id}>
                <p>IPFS HASH : {transaction.ifpsHash}</p>
                <p>Transaction Hash: {transaction.transactionhash}</p>
                <p className="grey-text">{moment(transaction.createdAt.toDate()).calendar()}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default History;
