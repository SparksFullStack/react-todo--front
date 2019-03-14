import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Containers/Home';
import ViewTodo from './Containers/ViewTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/view_todo" exact component={ViewTodo} />
      </div>
    );
  }
}

export default App;
