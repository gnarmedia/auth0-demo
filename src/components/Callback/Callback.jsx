import React, { Component } from "react";

import "./Callback.css";
import loading from "./loading.svg";

class Callback extends Component {
  render() {
    return (
      <div className="loader">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Callback;
