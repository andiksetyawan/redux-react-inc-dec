import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions/counter";

class Counter extends React.Component {
  render() {
    return (
      <>
        <button onClick={e => this.props.dispatch(increment())}>INC</button>
        <button onClick={e => this.props.dispatch(decrement())}>DEC</button>
        <h1>{this.props.counter}</h1>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
