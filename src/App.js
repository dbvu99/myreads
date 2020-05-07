import React from 'react';
import './App.css';
import Shelves from './Shelves'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <nav><h1>MyReads</h1></nav>
        <Shelves></Shelves>
      </div>
    );
  }
}

export default App;
