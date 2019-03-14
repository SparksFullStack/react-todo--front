import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Containers/Home';
import ViewTodo from './Containers/ViewTodo';
import EditTodo from './Containers/EditTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/view_todo" component={ViewTodo} />
        <Route path="/edit_todo" component={EditTodo} />
      </div>
    );
  }
}

export default App;
