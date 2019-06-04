import React, { Component } from "react";
import { Route, Router } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";

import Auth from "../utilities/auth/auth";
import history from "../utilities/history";

const auth = new Auth();

export default class App extends Component {
  login() {
    auth.login();
  }

  render() {
    return (
      <>
        <Navbar login={this.login} />
        <Router history={history}>
          <div>
            <Route path="/" component={Home} />
          </div>
        </Router>
      </>
    );
  }
}
