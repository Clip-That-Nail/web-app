import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Session from './pages/session/session.component';
import RegisterForm from './components/forms/register-form.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register-form">
          <RegisterForm />
        </Route>
        <Route path="/session">
          <Session />
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
