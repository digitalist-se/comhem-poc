import React, { Component } from 'react';
import { BrowserRouter as Router, Match, Miss } from 'react-router';
import Channels from './components/Channels';
// import data from './data';
// import './App.css';
// import { connect } from 'react-redux';

export default class App extends React.Component {


  render() {

    return (
      <Router>
      <div className="App">
        <h1>Comhem POC</h1>
        <Channels />

      </div>
      </Router>



    );
  }
}

// export default App;
