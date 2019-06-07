import React, { Component } from "react";
import { Route, Router } from "react-router-dom";

import Callback from "./Callback/Callback.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";

import Auth from "../utilities/auth/auth";
import history from "../utilities/history";

const auth = new Auth();

function handleAuthentication({ location }) {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export default class App extends Component {
  componentDidMount() {
    const { renewSession } = auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
  }

  render() {
    return (
      <>
        <Router history={history}>
          <div>
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />
            <Route
              render={() => (
                <Navbar
                  isAuthenticated={auth.isAuthenticated()}
                  login={this.login}
                  logout={this.logout}
                />
              )}
            />
            <Route path="/" component={Home} />
          </div>
        </Router>
      </>
    );
  }
}
