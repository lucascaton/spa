import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Button from '@material/react-button/dist';
import TopAppBar from '@material/react-top-app-bar/dist';

import Home from './Home';
import About from './About';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopAppBar short title="React SPA with Material Design" />

          <nav>
            <Link to="/">
              <Button raised>Home</Button>
            </Link>{' '}
            <Link to="/about">
              <Button raised>About</Button>
            </Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
