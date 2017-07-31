import React, { Component } from 'react';
import Spinner from '@skbkontur/react-ui/Spinner'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo">
            <Spinner type="big" caption="" />
          </div>
          <h2>Welcome to SKBKontur</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
