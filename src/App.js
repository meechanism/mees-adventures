import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { simpleAction } from "./actions/SimpleAction";

// components
import SmiileList from "./components/smiile/SmiileList";

class App extends Component {
  doSimpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Smiiles</h1>
        </header>
        <div className="App-body">
          <SmiileList />
        </div>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
