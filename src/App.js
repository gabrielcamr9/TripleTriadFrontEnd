import React, { Component } from 'react';
import CardList from './components/cardlist';
import "./App.css";
import Board from './components/board';

class App extends Component {
  render() {
    return (
      <div className="grid">
        <CardList />
        <Board />
        <CardList />
      </div>
    );
  }
}

export default App;
