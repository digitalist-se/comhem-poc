import React, { Component } from 'react';
import { BrowserRouter as Router, Match, Miss } from 'react-router';
import Channels from './components/Channels';
import data from './data';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Comhem POC</h1>
        <Channels channels={data.channels} />
      </div>
      </Router>



    );
  }
}

export default App;
