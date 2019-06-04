import React, { Component } from "react";

import Navbar from "./Navbar.jsx";

import Auth from "../auth/auth";

const auth = new Auth();

export default class App extends Component {
  login() {
    auth.login();
  }

  render() {
    return (
      <>
        <Navbar login={this.login} />
        <div className="">Please sign in to see profile</div>
      </>
    );
  }
}
