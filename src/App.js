import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import VoteList from './components/VoteList.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Senate Nominations Lookup Tool</h1>
          <img className="emblem" src='https://upload.wikimedia.org/wikipedia/commons/f/f0/Seal_of_the_United_States_Senate.svg' />
        </div>
        <div className="App-footer">
          <h3>Please Enter Your Search Query Below!</h3>
        </div>
        <VoteList />
      </div>
    );
  }
}

export default App;
