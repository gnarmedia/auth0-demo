import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";

import Callback from "./Callback/Callback.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Dashboard from "./Dashboard.jsx";

import Auth from "../utilities/auth/auth";
import history from "../utilities/history";

export default class App extends Component {
  auth = new Auth();

  componentDidMount() {
    const { renewSession } = this.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  handleAuthentication({ location }) {
    if (/access_token|id_token|error/.test(location.hash)) {
      this.auth.handleAuthentication();
    }
  }

  login = () => {
    this.auth.login();
  };

  logout = () => {
    this.auth.logout();
  };

  render() {
    return (
      <div className="container">
        <Router history={history}>
          <Route
            path="/callback"
            render={props => {
              this.handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route
            render={() => (
              <Navbar
                isAuthenticated={this.auth.isAuthenticated()}
                login={this.login}
                logout={this.logout}
              />
            )}
          />
          <Route path="/" exact component={Home} />
          <Route
            path="/dashboard"
            exact
            render={props =>
              this.auth.isAuthenticated() ? (
                <Dashboard auth={this.auth} />
              ) : (
                <Redirect to={{ pathname: "/" }} />
              )
            }
          />
        </Router>
      </div>
    );
  }
}
