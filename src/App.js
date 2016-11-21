import React, { Component } from 'react';
import { BrowserRouter as Router, Match, Miss } from 'react-router';
import Channels from './components/Channels';
// import data from './data';
// import './App.css';
import { connect } from 'react-redux';

class App extends Component {


  render() {

    const {author, channel} = this.props.channels[0];
    return (
      <Router>
      <div className="App">
        <h1>Comhem POC</h1>
        <p>{author}</p>
        {/*<Channels channels={data.channels} />*/}
      </div>
      </Router>



    );
  }
}

// export default App;
const mapStateToProps = (state) => {
 return {
  channels: state.channels
 }
}
export default connect(mapStateToProps)(App);
