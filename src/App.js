import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './Containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

export default App;
