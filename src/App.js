import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/session">
          session
          {/* <Session /> */}
        </Route>
        <Route path="/users">
          users
          {/* <Users /> */}
        </Route>
        <Route path="/">
          <Header />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
