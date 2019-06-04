import React, { Component } from "react";

import Navbar from "./Navbar.jsx";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="">Please sign in to see profile</div>
      </>
    );
  }
}
