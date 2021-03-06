import React from 'react';
import './App.css';
import Main from './Main';
import Search from './Search';
import { Route, Link } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Main</Link>
          <h1>MyReads</h1>
          <Link to="/search">Search</Link>
        </nav>
        <Route exact path="/" component={Main}></Route>
        <Route path="/search" component={Search}></Route>
      </div>
    );
  }
}

export default App;
