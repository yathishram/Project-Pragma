import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { selectTransactionData } from "../../selectors/transactionSelector";

const HistoryPage = ({ transactions }) => {
  console.log(transactions);
  return (
    <div>
      <h4>History!</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: selectTransactionData(state),
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (!props.auth.uid) return [];
    return [{ collection: "transactions", where: [["userId", "==", props.auth.uid]] }];
  })
)(HistoryPage);
